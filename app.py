from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)

# 🔑 重要：这里需要您填写DeepSeek API密钥
DEEPSEEK_API_KEY = os.getenv('DEEPSEEK_API_KEY')
if not DEEPSEEK_API_KEY:
    print("警告: DEEPSEEK_API_KEY 环境变量未设置")DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions"

@app.route('/')
def home():
    return jsonify({
        "message": "法镜·商盾AI后端服务运行正常", 
        "status": "active",
        "version": "2.0"
    })

@app.route('/ai-check', methods=['POST'])
def ai_check_ad():
    try:
        data = request.get_json()
        if not data or 'text' not in data:
            return jsonify({"error": "缺少文案内容"}), 400
        
        ad_text = data['text'].strip()
        if not ad_text:
            return jsonify({"error": "文案内容为空"}), 400
        
        # 调用DeepSeek API
        ai_result = analyze_with_deepseek(ad_text)
        
        return jsonify({
            "success": True,
            "ai_analysis": ai_result,
            "text_length": len(ad_text)
        })
        
    except Exception as e:
        return jsonify({"error": f"分析失败: {str(e)}"}), 500

def analyze_with_deepseek(ad_text):
    headers = {
        "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
        "Content-Type": "application/json"
    }
    
    # 优化后的提示词 - 精准修改，不自由发挥
    system_prompt = """你是一个专业的广告合规检测AI专家。严格依据《广告法》、《互联网广告管理办法》、《反不正当竞争法》等法律法规，对广告文案进行深度分析。

请按照以下要求进行分析：

【核心要求】
1. 只抓住关键核心有问题的部分进行修改
2. 不要逐字逐句地修改
3. 不要自由发挥太多，最大程度贴合原意
4. 避免冗余内容，修改建议要精准简洁

【分析框架】
1. 识别主要违规点（A/B/C三级）
2. 分析法律风险
3. 提供精准修改建议（只改有问题部分）
4. 引用相关法律条文

请用专业、精准的语言进行回复。"""

    payload = {
        "model": "deepseek-chat",
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f"请精准分析以下广告文案的合规性，只修改核心问题：\n\n{ad_text}"}
        ],
        "temperature": 0.2,  # 降低随机性，让回答更精准
        "max_tokens": 1500   # 限制长度，避免冗长
    }
    
    try:
        response = requests.post(DEEPSEEK_API_URL, headers=headers, json=payload, timeout=30)
        response.raise_for_status()
        
        result = response.json()
        return result["choices"][0]["message"]["content"]
        
    except requests.exceptions.RequestException as e:
        return f"AI分析服务暂时不可用，请稍后重试。"
    except Exception as e:
        return f"分析过程中出现错误，请稍后重试。"

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)