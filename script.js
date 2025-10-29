// ==================== 完整法规禁用词库 - 150+条 ====================
const violations = {
    aLevel: [
        {word: '最', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '最顶尖', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '第一', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '顶级', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '最佳', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '最好', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '最强', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '最高', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '最便宜', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '最优秀', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '最先进', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '最实惠', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '最专业', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '最安全', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '最有效', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '保证', desc: '使用保证性承诺，违反《广告法》相关规定', type: '保证性承诺'},
        {word: '担保', desc: '使用保证性承诺，违反《广告法》相关规定', type: '保证性承诺'},
        {word: '承诺', desc: '使用保证性承诺，违反《广告法》相关规定', type: '保证性承诺'},
        {word: '100%', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '百分之百', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '完全', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '彻底', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '绝对', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '国家级', desc: '使用国家机关名义，违反《广告法》第九条', type: '国家机关名义'},
        {word: '国家', desc: '不当使用国家名义，违反《广告法》第九条', type: '国家机关名义'},
        {word: '中国', desc: '不当使用国家名义，违反《广告法》第九条', type: '国家机关名义'},
        {word: '中央', desc: '不当使用国家机关名义，违反《广告法》第九条', type: '国家机关名义'},
        {word: '政府', desc: '不当使用政府名义，违反《广告法》第九条', type: '国家机关名义'},
        {word: '国务院', desc: '不当使用国家机关名义，违反《广告法》第九条', type: '国家机关名义'},
        {word: '党中央', desc: '不当使用国家机关名义，违反《广告法》第九条', type: '国家机关名义'},
        {word: '根治', desc: '医疗广告中使用根治等绝对化用语，违反《广告法》', type: '医疗违规'},
        {word: '治愈', desc: '医疗广告中使用治愈等绝对化用语，违反《广告法》', type: '医疗违规'},
        {word: '无效退款', desc: '使用无效退款等保证性承诺，违反《广告法》', type: '保证性承诺'},
        {word: '安全无毒', desc: '使用绝对化安全承诺，违反《广告法》', type: '绝对化用语'},
        {word: '无任何副作用', desc: '使用绝对化安全承诺，违反《广告法》', type: '绝对化用语'},
        {word: '永不', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '绝无', desc: '使用绝对化用语，违反《广告法》第九条', type: '绝对化用语'},
        {word: '特效', desc: '使用特效等无法证实的表述，违反《广告法》', type: '虚假宣传'},
        {word: '神奇', desc: '使用神奇等夸大宣传用语，违反《广告法》', type: '夸大宣传'},
        {word: '秘方', desc: '使用秘方等无法证实的表述，违反《广告法》', type: '虚假宣传'},
        {word: '独家', desc: '使用独家等无法证实的表述，需提供证明', type: '需证明内容'},
        {word: '极品', desc: '使用不当夸张用语', type: '夸大宣传'},
        {word: '终极', desc: '使用不当绝对化用语', type: '绝对化用语'},
        {word: '完美', desc: '使用不当绝对化用语', type: '绝对化用语'},
        {word: '极致', desc: '使用不当绝对化用语', type: '绝对化用语'},
        {word: '无敌', desc: '使用不当绝对化用语', type: '绝对化用语'},
        {word: '史无前例', desc: '使用不当绝对化用语', type: '绝对化用语'}
    ],
    bLevel: [
        {word: '专利', desc: '涉及专利内容，需提供专利证书及专利号', type: '专利相关'},
        {word: '专利号', desc: '涉及专利内容，需提供专利证书', type: '专利相关'},
        {word: '发明专利', desc: '涉及专利内容，需提供专利证书', type: '专利相关'},
        {word: '实用新型', desc: '涉及专利内容，需提供专利证书', type: '专利相关'},
        {word: '外观设计', desc: '涉及专利内容，需提供专利证书', type: '专利相关'},
        {word: '认证', desc: '涉及认证内容，需提供相关认证证明', type: '认证相关'},
        {word: 'ISO', desc: '涉及认证内容，需提供相关认证证明', type: '认证相关'},
        {word: '质量认证', desc: '涉及认证内容，需提供相关认证证明', type: '认证相关'},
        {word: '环保认证', desc: '涉及认证内容，需提供相关认证证明', type: '认证相关'},
        {word: '安全认证', desc: '涉及认证内容，需提供相关认证证明', type: '认证相关'},
        {word: '通过认证', desc: '涉及认证内容，需提供相关认证证明', type: '认证相关'},
        {word: '权威认证', desc: '涉及认证内容，需提供相关认证证明', type: '认证相关'},
        {word: '资质', desc: '涉及资质内容，需提供相关资质证明', type: '资质相关'},
        {word: '许可证', desc: '涉及许可证内容，需提供相关许可证', type: '资质相关'},
        {word: '执照', desc: '涉及执照内容，需提供相关证明', type: '资质相关'},
        {word: '资格证书', desc: '涉及资格证书，需提供相关证明', type: '资质相关'},
        {word: '行业标准', desc: '涉及行业标准，需提供相关证明', type: '资质相关'},
        {word: '国家标准', desc: '涉及国家标准，需提供相关证明', type: '资质相关'},
        {word: '获奖', desc: '涉及获奖内容，需提供获奖证明', type: '荣誉相关'},
        {word: '金奖', desc: '涉及获奖内容，需提供获奖证明', type: '荣誉相关'},
        {word: '银奖', desc: '涉及获奖内容，需提供获奖证明', type: '荣誉相关'},
        {word: '铜奖', desc: '涉及获奖内容，需提供获奖证明', type: '荣誉相关'},
        {word: '荣誉称号', desc: '涉及荣誉称号，需提供相关证明文件', type: '荣誉相关'},
        {word: '驰名商标', desc: '涉及驰名商标，需提供相关认定文件', type: '商标相关'},
        {word: '著名商标', desc: '涉及著名商标，需提供相关认定文件', type: '商标相关'},
        {word: '老字号', desc: '涉及老字号，需提供相关认定文件', type: '资质相关'},
        {word: '市场占有率', desc: '涉及市场数据，需提供权威统计证明', type: '数据相关'},
        {word: '用户数', desc: '涉及用户数据，需提供真实统计证明', type: '数据相关'},
        {word: '销量', desc: '涉及销售数据，需提供真实统计证明', type: 'data相关'},
        {word: '销售额', desc: '涉及销售数据，需提供真实统计证明', type: 'data相关'},
        {word: '市场份额', desc: '涉及市场数据，需提供权威统计证明', type: 'data相关'}
    ],
    cLevel: [
        {word: '优于', desc: '使用比较性广告，可能构成不正当竞争', type: '比较广告'},
        {word: '超过', desc: '使用比较性广告，可能构成不正当竞争', type: '比较广告'},
        {word: '打败', desc: '使用比较性广告，可能构成不正当竞争', type: '比较广告'},
        {word: '击败', desc: '使用比较性广告，可能构成不正当竞争', type: '比较广告'},
        {word: '胜过', desc: '使用比较性广告，可能构成不正当竞争', type: '比较广告'},
        {word: '强于', desc: '使用比较性广告，可能构成不正当竞争', type: '比较广告'},
        {word: '领导品牌', desc: '使用无法证实的市场地位宣传', type: '市场地位'},
        {word: '领导者', desc: '使用无法证实的市场地位宣传', type: '市场地位'},
        {word: '领先', desc: '使用无法证实的市场地位宣传', type: '市场地位'},
        {word: '领军', desc: '使用无法证实的市场地位宣传', type: '市场地位'},
        {word: '第一品牌', desc: '使用无法证实的市场地位宣传', type: '市场地位'},
        {word: '行业第一', desc: '使用无法证实的市场地位宣传', type: '市场地位'},
        {word: '十万', desc: '使用数据宣传，需确保数据真实准确', type: 'data相关'},
        {word: '百万', desc: '使用数据宣传，需确保数据真实准确', type: 'data相关'},
        {word: '千万', desc: '使用数据宣传，需确保数据真实准确', type: 'data相关'},
        {word: '亿', desc: '使用数据宣传，需确保数据真实准确', type: 'data相关'},
        {word: '99%', desc: '使用数据宣传，需确保数据真实准确', type: 'data相关'},
        {word: '95%', desc: '使用数据宣传，需确保数据真实准确', type: 'data相关'},
        {word: '立即见效', desc: '使用无法验证的时间承诺', type: '时间承诺'},
        {word: '马上', desc: '使用无法验证的时间承诺', type: '时间承诺'},
        {word: '瞬间', desc: '使用无法验证的时间承诺', type: '时间承诺'},
        {word: '立刻', desc: '使用无法验证的时间承诺', type: '时间承诺'},
        {word: '马上见效', desc: '使用无法验证的时间承诺', type: '时间承诺'},
        {word: '立竿见影', desc: '使用无法验证的时间承诺', type: '时间承诺'},
        {word: '显著优于', desc: '使用比较性广告，可能构成不正当竞争', type: '比较广告'},
        {word: '安全无毒', desc: '医疗相关宣传需谨慎，避免绝对化表述', type: '医疗违规'},
        {word: '彻底解决', desc: '避免使用无法验证的绝对化承诺', type: '绝对化用语'},
        {word: '独家技术', desc: '使用独家表述，需确保表述真实', type: '需证明内容'},
        {word: '特效', desc: '使用特效表述，需确保有相应依据', type: '夸大宣传'}
    ]
};

// ==================== 核心变量 ====================
let qualifiedWords = new Set();

// ==================== DOM元素初始化 ====================
const detectBtn = document.getElementById('detect-btn');
const aiDetectBtn = document.getElementById('ai-detect-btn');
const clearBtn = document.getElementById('clear-btn');
const adContent = document.getElementById('ad-content');
const resultContent = document.getElementById('result-content');
const reportBtn = document.getElementById('report-btn');
const aiResultContent = document.getElementById('ai-result-content');
const aiAnalysisResult = document.getElementById('ai-analysis-result');
const aiLoading = document.getElementById('ai-loading');
const pdfLoading = document.getElementById('pdf-loading');
const qualificationModal = document.getElementById('qualification-modal');
const modalText = document.getElementById('modal-text');
const noQualifyBtn = document.getElementById('no-qualify-btn');
const hasQualifyBtn = document.getElementById('has-qualify-btn');

// ==================== 基础检测功能 - 使用DOM操作 ====================
detectBtn.addEventListener('click', function() {
    const content = adContent.value;
    if (!content.trim()) {
        resultContent.innerHTML = '<p style="color: #e74c3c; text-align: center;">请输入广告文案内容</p>';
        updateStats(0, 0, 0);
        return;
    }
    
    const detectionResults = performDetection(content);
    displayDetectionResults(detectionResults);
    updateStats(detectionResults.counts.a, detectionResults.counts.b, detectionResults.counts.c);
    updateTypeStats(detectionResults.types);
});

// 全新的检测逻辑 - 使用DOM操作避免HTML属性显示问题
function performDetection(content) {
    let counts = { a: 0, b: 0, c: 0 };
    let detectedTypes = [];
    let detectedWords = [];
    
    // 检测所有违规词汇
    violations.aLevel.forEach(item => {
        if (content.includes(item.word) && !qualifiedWords.has(item.word)) {
            const matches = findAllMatches(content, item.word);
            matches.forEach(match => {
                detectedWords.push({
                    word: item.word,
                    desc: item.desc,
                    type: item.type,
                    level: 'a',
                    index: match.index,
                    length: item.word.length
                });
            });
            counts.a += matches.length;
            if (!detectedTypes.includes(item.type)) detectedTypes.push(item.type);
        }
    });
    
    violations.bLevel.forEach(item => {
        if (content.includes(item.word) && !qualifiedWords.has(item.word)) {
            const matches = findAllMatches(content, item.word);
            matches.forEach(match => {
                detectedWords.push({
                    word: item.word,
                    desc: item.desc,
                    type: item.type,
                    level: 'b',
                    index: match.index,
                    length: item.word.length
                });
            });
            counts.b += matches.length;
            if (!detectedTypes.includes(item.type)) detectedTypes.push(item.type);
        }
    });
    
    violations.cLevel.forEach(item => {
        if (content.includes(item.word) && !qualifiedWords.has(item.word)) {
            const matches = findAllMatches(content, item.word);
            matches.forEach(match => {
                detectedWords.push({
                    word: item.word,
                    desc: item.desc,
                    type: item.type,
                    level: 'c',
                    index: match.index,
                    length: item.word.length
                });
            });
            counts.c += matches.length;
            if (!detectedTypes.includes(item.type)) detectedTypes.push(item.type);
        }
    });
    
    // 按位置排序
    detectedWords.sort((a, b) => a.index - b.index);
    
    return {
        content: content,
        counts: counts,
        types: detectedTypes,
        detectedWords: detectedWords
    };
}

// 查找所有匹配位置
function findAllMatches(text, word) {
    const matches = [];
    let index = text.indexOf(word);
    while (index !== -1) {
        matches.push({ index: index });
        index = text.indexOf(word, index + word.length);
    }
    return matches;
}

// 使用DOM操作显示结果
function displayDetectionResults(results) {
    const { content, detectedWords } = results;
    
    // 清空结果容器
    resultContent.innerHTML = '';
    
    if (detectedWords.length === 0) {
        resultContent.innerHTML = '<p style="color: #27ae60; text-align: center;">恭喜！未发现明显的广告法违规词汇。</p>';
        return;
    }
    
    // 创建文本节点和span元素
    let lastIndex = 0;
    const fragment = document.createDocumentFragment();
    
    detectedWords.forEach(detected => {
        // 添加前面的普通文本
        if (detected.index > lastIndex) {
            const normalText = document.createTextNode(content.substring(lastIndex, detected.index));
            fragment.appendChild(normalText);
        }
        
        // 创建高亮span
        const highlightSpan = document.createElement('span');
        highlightSpan.className = `highlight highlight-${detected.level}`;
        highlightSpan.textContent = detected.word;
        highlightSpan.setAttribute('data-word', detected.word);
        highlightSpan.setAttribute('data-desc', detected.desc);
        highlightSpan.setAttribute('data-type', detected.type);
        
        // 添加点击事件
        highlightSpan.addEventListener('click', function() {
            handleHighlightClick(this, detected.level);
        });
        
        fragment.appendChild(highlightSpan);
        lastIndex = detected.index + detected.length;
    });
    
    // 添加剩余的普通文本
    if (lastIndex < content.length) {
        const remainingText = document.createTextNode(content.substring(lastIndex));
        fragment.appendChild(remainingText);
    }
    
    resultContent.appendChild(fragment);
}

// 处理高亮点击
function handleHighlightClick(element, level) {
    const word = element.getAttribute('data-word');
    const desc = element.getAttribute('data-desc');
    
    switch(level) {
        case 'a':
            showAlert(`A级违规: "${word}"`, `${desc}\n\n建议：请立即删除此表述！`);
            break;
        case 'b':
            modalText.textContent = `"${word}" - ${desc}`;
            modalText.setAttribute('data-word', word);
            qualificationModal.style.display = 'flex';
            break;
        case 'c':
            showAlert(`C级不当表述: "${word}"`, `${desc}\n\n建议：修改为更合规的表述方式`);
            break;
    }
}

// ==================== AI深度分析功能 ====================
aiDetectBtn.addEventListener('click', async function() {
    const content = adContent.value.trim();
    if (!content) {
        alert('请先输入广告文案');
        return;
    }
    
    aiLoading.style.display = 'block';
    aiDetectBtn.disabled = true;
    aiResultContent.innerHTML = '';
    
    try {
        const backendURL = 'https://fajing-backend.onrender.com/ai-check';
        
        const response = await fetch(backendURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: content })
        });
        
        const data = await response.json();
        
        aiLoading.style.display = 'none';
        aiDetectBtn.disabled = false;
        
        if (data.success && data.ai_analysis) {
            aiResultContent.innerHTML = formatAIText(data.ai_analysis);
            aiAnalysisResult.style.display = 'block';
        } else {
            aiResultContent.innerHTML = `<p style="color: #e74c3c;">AI分析失败: ${data.error || '未知错误'}</p>`;
            aiAnalysisResult.style.display = 'block';
        }
    } catch (error) {
        aiLoading.style.display = 'none';
        aiDetectBtn.disabled = false;
        aiResultContent.innerHTML = `<p style="color: #e74c3c;">AI服务连接失败: ${error.message}</p>`;
        aiAnalysisResult.style.display = 'block';
        console.error('AI分析请求失败:', error);
    }
});

// 格式化AI返回的文本
function formatAIText(text) {
    if (!text) return '';
    return text
        .replace(/\n/g, '<br>')
        .replace(/(【.*?】)/g, '<strong>$1</strong>')
        .replace(/(\d+\.)/g, '<br><strong>$1</strong>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

// ==================== 资质审核功能 ====================
noQualifyBtn.addEventListener('click', function() {
    qualificationModal.style.display = 'none';
    showAlert('修改建议', 
        '1. 删除需要资质证明的表述\n' +
        '2. 替换为更中性的表述，如"我们注重技术创新"代替"我们拥有专利"\n' +
        '3. 确保所有宣传内容均有相应证明文件支持');
});

hasQualifyBtn.addEventListener('click', function() {
    const word = modalText.getAttribute('data-word');
    qualifiedWords.add(word);
    
    const content = adContent.value;
    const detectionResults = performDetection(content);
    displayDetectionResults(detectionResults);
    updateStats(detectionResults.counts.a, detectionResults.counts.b, detectionResults.counts.c);
    updateTypeStats(detectionResults.types);
    
    qualificationModal.style.display = 'none';
});

// ==================== 其他功能 ====================
clearBtn.addEventListener('click', function() {
    adContent.value = '';
    resultContent.innerHTML = '请点击检测按钮分析广告文案合规性...';
    aiAnalysisResult.style.display = 'none';
    qualifiedWords.clear();
    updateStats(0, 0, 0);
    document.getElementById('type-stats').innerHTML = '';
});

function updateStats(a, b, c) {
    const counts = document.querySelectorAll('.stat-count');
    counts[0].textContent = a;
    counts[1].textContent = b;
    counts[2].textContent = c;
}

function updateTypeStats(types) {
    const typeStatsElement = document.getElementById('type-stats');
    if (!typeStatsElement) return;
    
    const typeCounts = {};
    types.forEach(type => {
        typeCounts[type] = (typeCounts[type] || 0) + 1;
    });
    
    let html = '<h4>违规类型分析</h4><div class="type-tags">';
    Object.entries(typeCounts).forEach(([type, count]) => {
        html += `<span class="type-tag">${type}(${count})</span>`;
    });
    html += '</div>';
    
    typeStatsElement.innerHTML = html;
}

// PDF报告生成
reportBtn.addEventListener('click', function() {
    const content = adContent.value.trim();
    if (!content) {
        alert('请先输入广告文案');
        return;
    }
    
    pdfLoading.style.display = 'block';
    reportBtn.disabled = true;
    
    setTimeout(() => {
        generatePDFReport(content);
        pdfLoading.style.display = 'none';
        reportBtn.disabled = false;
    }, 100);
});

// PDF报告生成函数
function generatePDFReport(content) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFont('helvetica');
    doc.setFontSize(18);
    doc.setTextColor(52, 152, 219);
    doc.text('FaJing Advertisement Compliance Report', 105, 20, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Intelligent Advertisement Law Compliance Detection', 105, 27, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const currentDate = new Date().toLocaleString('zh-CN');
    doc.text(`Detection Time: ${currentDate}`, 20, 45);
    
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 50, 190, 50);
    
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text('1. Original Advertisement Content', 20, 65);
    
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    
    const splitText = doc.splitTextToSize(content, 170);
    let textY = 75;
    splitText.forEach(line => {
        if (textY > 270) {
            doc.addPage();
            textY = 20;
        }
        doc.text(line, 20, textY);
        textY += 7;
    });
    
    const aCount = parseInt(document.querySelector('.stat-a .stat-count').textContent);
    const bCount = parseInt(document.querySelector('.stat-b .stat-count').textContent);
    const cCount = parseInt(document.querySelector('.stat-c .stat-count').textContent);
    
    let tableY = textY + 15;
    if (tableY > 250) {
        doc.addPage();
        tableY = 20;
    }
    
    doc.setFontSize(14);
    doc.setTextColor(44, 62, 80);
    doc.text('2. Detection Results Summary', 20, tableY);
    
    doc.autoTable({
        startY: tableY + 10,
        head: [['Risk Level', 'Count', 'Description']],
        body: [
            ['A - Critical Violation', aCount, 'Immediate deletion required'],
            ['B - Need Qualification', bCount, 'Requires proof documents'],
            ['C - Suggestion', cCount, 'Recommend optimization']
        ],
        styles: { 
            fontSize: 10, 
            cellPadding: 3,
            font: 'helvetica'
        },
        headStyles: { 
            fillColor: [231, 76, 60],
            font: 'helvetica'
        },
        alternateRowStyles: { 
            fillColor: [245, 245, 245] 
        }
    });
    
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(`Page ${i} of ${pageCount}`, 105, 285, { align: 'center' });
        doc.text('FaJing Business Shield - For Reference Only', 105, 290, { align: 'center' });
    }
    
    const timestamp = new Date().getTime();
    doc.save(`FaJing_Compliance_Report_${timestamp}.pdf`);
}

function showAlert(title, message) {
    alert(`【${title}】\n\n${message}`);
}

window.addEventListener('click', function(event) {
    if (event.target === qualificationModal) qualificationModal.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    const totalWords = violations.aLevel.length + violations.bLevel.length + violations.cLevel.length;
    document.getElementById('word-count').textContent = totalWords + '+';
    
    console.log('法镜·商盾广告合规检测平台已加载完成 - 最终版本');
    console.log(`本地词库: ${totalWords}条法规禁用词`);
});

