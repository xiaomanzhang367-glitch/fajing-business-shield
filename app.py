from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)

# 从环境变量获取API密钥
DEEPSEEK_API_KEY = os.getenv('DEEPSEEK_API_KEY')
DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions"

if not DEEPSEEK_API_KEY:
    print("警告: DEEPSEEK_API_KEY 环境变量未设置")

@app.route('/')
def home():
    return jsonify({
        "message": "法镜·商盾AI后端服务运行正常 - 多语言版本", 
        "status": "active",
        "version": "2.0",
        "ai_enabled": bool(DEEPSEEK_API_KEY),
        "languages_supported": ["zh", "en"]
    })

@app.route('/ai-check', methods=['POST'])
def ai_check_ad():
    try:
        # 检查API密钥
        if not DEEPSEEK_API_KEY:
            return jsonify({
                "error": "AI服务未配置",
                "message": "请配置DEEPSEEK_API_KEY环境变量"
            }), 500
            
        data = request.get_json()
        if not data or 'text' not in data:
            return jsonify({"error": "缺少文案内容"}), 400
        
        ad_text = data['text'].strip()
        if not ad_text:
            return jsonify({"error": "文案内容为空"}), 400
        
        # 获取语言参数，默认为中文
        language = data.get('language', 'zh')
        
        # 调用DeepSeek API
        ai_result = analyze_with_deepseek(ad_text, language)
        
        return jsonify({
            "success": True,
            "ai_analysis": ai_result,
            "text_length": len(ad_text),
            "language": language
        })
        
    except Exception as e:
        return jsonify({"error": f"分析失败: {str(e)}"}), 500

def analyze_with_deepseek(ad_text, language):
    headers = {
        "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
        "Content-Type": "application/json"
    }
    
    # 根据语言选择不同的提示词
    if language == 'en':
        system_prompt = """You are a professional advertisement compliance detection AI expert. Strictly follow FTC guidelines, FDA regulations, and international advertising laws to deeply analyze advertisement copy.

Please analyze according to the following requirements:

【Core Requirements】
1. Focus only on key problematic parts for modification
2. Do not modify word by word
3. Do not add too much creative content, stay close to the original intent
4. Avoid redundant content, provide precise and concise modification suggestions

【Analysis Framework】
1. Identify main violation points (Level A/B/C)
2. Analyze legal risks
3. Provide precise modification suggestions (only modify problematic parts)
4. Reference relevant legal provisions

Please respond in professional, precise English language."""
    else:
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
            {"role": "user", "content": f"请精准分析以下广告文案的合规性，只修改核心问题：\n\n{ad_text}" if language == 'zh' else f"Please precisely analyze the compliance of the following advertisement copy, only modify core issues:\n\n{ad_text}"}
        ],
        "temperature": 0.2,
        "max_tokens": 1500
    }
    
    try:
        response = requests.post(DEEPSEEK_API_URL, headers=headers, json=payload, timeout=30)
        response.raise_for_status()
        
        result = response.json()
        return result["choices"][0]["message"]["content"]
        
    except requests.exceptions.RequestException as e:
        return f"AI分析服务暂时不可用，请稍后重试。错误: {str(e)}" if language == 'zh' else f"AI analysis service temporarily unavailable, please try again later. Error: {str(e)}"
    except Exception as e:
        return f"分析过程中出现错误: {str(e)}" if language == 'zh' else f"Error occurred during analysis: {str(e)}"

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
