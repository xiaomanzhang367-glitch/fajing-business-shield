// ==================== 多语言配置 ====================
const translations = {
    zh: {
        // 界面文本
        logo: "法镜·商盾",
        subtitle: "广告合规智能检测平台",
        navHome: "首页",
        navTools: "检测工具",
        navLaws: "法律法规",
        inputTitle: "📝 广告文案输入",
        inputPlaceholder: "请输入您的广告文案...",
        detectBtn: "🔍 基础检测",
        aiDetectBtn: "🤖 AI深度分析",
        clearBtn: "🗑️ 清空内容",
        legendA: "A级违规（立即删除）",
        legendB: "B级需资质证明",
        legendC: "C级不当用法",
        wordCountText: "本地词库：{count} 条法规禁用词 | AI增强：语义理解分析",
        comingSoon1: "🔮 敬请期待：图片文字识别功能上线",
        comingSoon2: "📊 专利数据同步功能（模拟数据）",
        resultTitle: "📊 检测结果",
        defaultResult: "请点击检测按钮分析广告文案合规性...",
        aiResultTitle: "🤖 AI深度分析结果",
        statA: "A级违规",
        statB: "B级需资质",
        statC: "C级不当",
        pdfLoading: "正在生成PDF报告，请稍候...",
        aiLoading: "AI正在深度分析，请稍候...",
        reportBtn: "📄 生成合规报告 (PDF)",
        knowledgeTitle: "📚 广告法规知识库",
        lawTitle1: "《广告法》第九条",
        lawContent1: "广告不得使用\"国家级\"、\"最高级\"、\"最佳\"等绝对化用语。",
        lawDesc1: "禁止使用绝对化用语，如：最、第一、顶级、最佳等",
        lawTitle2: "《广告法》第十一条",
        lawContent2: "广告内容涉及的事项需要取得行政许可的，应当与许可的内容相符合。",
        lawDesc2: "涉及专利、认证、资质等内容需提供相应证明",
        footerText1: "法镜·商盾 - 基于《广告法》《互联网广告管理办法》等法律法规构建 | 智能广告合规检测工具",
        footerText2: "© 2025 法镜·商盾 版权所有 | 让广告更合规，让营销更安心",
        modalTitle: "📋 资质证明提醒",
        modalDesc: "检测到需要资质证明的内容：",
        noQualifyBtn: "我没有资质",
        hasQualifyBtn: "我有相关资质",
        // 检测结果文本
        noContent: "请输入广告文案内容",
        noViolations: "恭喜！未发现明显的广告法违规词汇。",
        aLevelAlert: "A级违规: \"{word}\"",
        aLevelDesc: "{desc}\n\n建议：请立即删除此表述！",
        cLevelAlert: "C级不当表述: \"{word}\"",
        cLevelDesc: "{desc}\n\n建议：修改为更合规的表述方式",
        modifyAdvice: "修改建议",
        modifyContent: "1. 删除需要资质证明的表述\n2. 替换为更中性的表述，如\"我们注重技术创新\"代替\"我们拥有专利\"\n3. 确保所有宣传内容均有相应证明文件支持",
        typeAnalysis: "违规类型分析"
    },
    en: {
        // 界面文本
        logo: "FaJing Business Shield",
        subtitle: "Advertisement Compliance Detection Platform",
        navHome: "Home",
        navTools: "Detection Tools",
        navLaws: "Laws & Regulations",
        inputTitle: "📝 Advertisement Input",
        inputPlaceholder: "Please enter your advertisement copy...",
        detectBtn: "🔍 Basic Detection",
        aiDetectBtn: "🤖 AI Deep Analysis",
        clearBtn: "🗑️ Clear Content",
        legendA: "Level A Violation (Delete Immediately)",
        legendB: "Level B Requires Qualification",
        legendC: "Level C Improper Usage",
        wordCountText: "Local Dictionary: {count} regulated prohibited words | AI Enhanced: Semantic Analysis",
        comingSoon1: "🔮 Coming Soon: Image Text Recognition",
        comingSoon2: "📊 Patent Data Sync (Demo Data)",
        resultTitle: "📊 Detection Results",
        defaultResult: "Please click detection button to analyze advertisement compliance...",
        aiResultTitle: "🤖 AI Deep Analysis Results",
        statA: "Level A Violation",
        statB: "Level B Requires Proof",
        statC: "Level C Improper",
        pdfLoading: "Generating PDF report, please wait...",
        aiLoading: "AI is analyzing deeply, please wait...",
        reportBtn: "📄 Generate Compliance Report (PDF)",
        knowledgeTitle: "📚 Advertisement Law Knowledge Base",
        lawTitle1: "FTC Guidelines - Absolute Claims",
        lawContent1: "Advertisements cannot use absolute claims like \"best\", \"#1\", \"top\" without verified proof.",
        lawDesc1: "Prohibited absolute terms: best, #1, top, perfect, ultimate, etc.",
        lawTitle2: "FDA Regulations - Health Claims",
        lawContent2: "Health-related claims require FDA approval and substantial scientific evidence.",
        lawDesc2: "Health, treatment, prevention claims need proper authorization",
        footerText1: "FaJing Business Shield - Based on FTC, FDA regulations | Intelligent Advertisement Compliance Tool",
        footerText2: "© 2025 FaJing Business Shield All Rights Reserved | Make Advertising Compliant, Marketing Secure",
        modalTitle: "📋 Qualification Proof Reminder",
        modalDesc: "Content requiring qualification proof detected:",
        noQualifyBtn: "I Don't Have Qualification",
        hasQualifyBtn: "I Have Related Qualification",
        // 检测结果文本
        noContent: "Please enter advertisement content",
        noViolations: "Congratulations! No obvious advertisement law violations found.",
        aLevelAlert: "Level A Violation: \"{word}\"",
        aLevelDesc: "{desc}\n\nRecommendation: Delete this statement immediately!",
        cLevelAlert: "Level C Improper Statement: \"{word}\"",
        cLevelDesc: "{desc}\n\nRecommendation: Modify to more compliant expression",
        modifyAdvice: "Modification Advice",
        modifyContent: "1. Delete statements requiring qualification proof\n2. Replace with more neutral expressions, e.g., \"We focus on technological innovation\" instead of \"We have patents\"\n3. Ensure all promotional content has corresponding supporting documents",
        typeAnalysis: "Violation Type Analysis"
    }
};

// ==================== 完整法规禁用词库 - 包含中英文 ====================
const violations = {
    zh: {
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
    },
    en: {
        aLevel: [
            {word: 'best', desc: 'Using absolute claims without proof, violates FTC guidelines', type: 'Absolute Claims'},
            {word: '#1', desc: 'Using ranking claims without verification, violates advertising laws', type: 'Ranking Claims'},
            {word: 'top', desc: 'Using absolute superiority claims, requires proof', type: 'Absolute Claims'},
            {word: 'perfect', desc: 'Using unsubstantiated perfect claims', type: 'Absolute Claims'},
            {word: 'ultimate', desc: 'Using ultimate claims without proof', type: 'Absolute Claims'},
            {word: 'greatest', desc: 'Using superlative claims without evidence', type: 'Absolute Claims'},
            {word: '100%', desc: 'Using absolute percentage claims without proof', type: 'Absolute Claims'},
            {word: 'completely', desc: 'Using absolute completion claims', type: 'Absolute Claims'},
            {word: 'absolutely', desc: 'Using absolute certainty claims', type: 'Absolute Claims'},
            {word: 'forever', desc: 'Using unverifiable time duration claims', type: 'Time Claims'},
            {word: 'never', desc: 'Using absolute negative claims', type: 'Absolute Claims'},
            {word: 'cures', desc: 'Making medical cure claims without FDA approval', type: 'Health Claims'},
            {word: 'treats', desc: 'Making medical treatment claims without authorization', type: 'Health Claims'},
            {word: 'prevents', desc: 'Making disease prevention claims without proof', type: 'Health Claims'}
        ],
        bLevel: [
            {word: 'patent', desc: 'Patent claims require patent numbers and certificates', type: 'Patent Related'},
            {word: 'patented', desc: 'Requires patent documentation proof', type: 'Patent Related'},
            {word: 'certified', desc: 'Certification claims require certification documents', type: 'Certification'},
            {word: 'ISO', desc: 'ISO certification requires proof of certification', type: 'Certification'},
            {word: 'FDA approved', desc: 'FDA approval requires official approval documents', type: 'Approval'},
            {word: 'award-winning', desc: 'Award claims require award proof', type: 'Awards'},
            {word: 'licensed', desc: 'License claims require license documentation', type: 'Licenses'},
            {word: 'doctor recommended', desc: 'Requires evidence of professional recommendation', type: 'Endorsement'},
            {word: 'clinically proven', desc: 'Requires clinical study evidence', type: 'Clinical Proof'},
            {word: 'scientifically proven', desc: 'Requires scientific research evidence', type: 'Scientific Proof'}
        ],
        cLevel: [
            {word: 'better than', desc: 'Comparative advertising may constitute unfair competition', type: 'Comparative Ads'},
            {word: 'beats', desc: 'Direct competitor comparison requires proof', type: 'Comparative Ads'},
            {word: 'superior to', desc: 'Superiority claims require comparative evidence', type: 'Comparative Ads'},
            {word: 'outperforms', desc: 'Performance comparison needs verification', type: 'Comparative Ads'},
            {word: 'leader', desc: 'Market leadership claims require market data', type: 'Market Position'},
            {word: 'leading', desc: 'Leading position claims need verification', type: 'Market Position'},
            {word: '#1 brand', desc: 'Number one brand claims require sales data', type: 'Market Position'},
            {word: 'industry leader', desc: 'Industry leadership requires industry data', type: 'Market Position'},
            {word: 'immediately', desc: 'Immediate effect claims may be unverifiable', type: 'Time Claims'},
            {word: 'instantly', desc: 'Instant result claims need proof', type: 'Time Claims'},
            {word: 'overnight', desc: 'Overnight result claims require evidence', type: 'Time Claims'},
            {word: 'magic', desc: 'Using exaggerated "magic" claims', type: 'Exaggeration'},
            {word: 'miracle', desc: 'Using unsubstantiated "miracle" claims', type: 'Exaggeration'},
            {word: 'secret', desc: 'Using unverifiable "secret" claims', type: 'Exaggeration'}
        ]
    }
};

// ==================== 全局变量 ====================
let currentLanguage = 'zh';
let qualifiedWords = new Set();

// ==================== DOM元素初始化 ====================
let detectBtn, aiDetectBtn, clearBtn, adContent, resultContent, reportBtn;
let aiResultContent, aiAnalysisResult, aiLoading, pdfLoading;
let qualificationModal, modalText, noQualifyBtn, hasQualifyBtn;
let langZhBtn, langEnBtn;

// ==================== 语言切换功能 ====================
function switchLanguage(lang) {
    console.log('切换语言到:', lang);
    currentLanguage = lang;
    
    // 更新语言按钮状态
    langZhBtn.classList.toggle('active', lang === 'zh');
    langEnBtn.classList.toggle('active', lang === 'en');
    
    // 更新界面文本
    updateInterfaceText();
    
    // 清空检测结果
    resultContent.innerHTML = translations[lang].defaultResult;
    aiAnalysisResult.style.display = 'none';
    qualifiedWords.clear();
    updateStats(0, 0, 0);
    document.getElementById('type-stats').innerHTML = '';
    
    // 更新输入框占位符
    adContent.placeholder = translations[lang].inputPlaceholder;
    
    // 更新词库统计
    const totalWords = violations[lang].aLevel.length + violations[lang].bLevel.length + violations[lang].cLevel.length;
    document.getElementById('word-count').textContent = totalWords + '+';
    
    console.log('语言切换完成');
}

function updateInterfaceText() {
    const t = translations[currentLanguage];
    console.log('更新界面文本，语言:', currentLanguage);
    
    try {
        // 更新所有文本元素
        document.getElementById('logo-text').textContent = t.logo;
        document.getElementById('subtitle-text').textContent = t.subtitle;
        document.getElementById('nav-home').textContent = t.navHome;
        document.getElementById('nav-tools').textContent = t.navTools;
        document.getElementById('nav-laws').textContent = t.navLaws;
        document.getElementById('input-title').textContent = t.inputTitle;
        document.getElementById('detect-btn').textContent = t.detectBtn;
        document.getElementById('ai-detect-btn').textContent = t.aiDetectBtn;
        document.getElementById('clear-btn').textContent = t.clearBtn;
        document.getElementById('legend-a').textContent = t.legendA;
        document.getElementById('legend-b').textContent = t.legendB;
        document.getElementById('legend-c').textContent = t.legendC;
        document.getElementById('word-count-text').innerHTML = t.wordCountText.replace('{count}', '<span id="word-count">150+</span>');
        document.getElementById('coming-soon-1').textContent = t.comingSoon1;
        document.getElementById('coming-soon-2').textContent = t.comingSoon2;
        document.getElementById('result-title').textContent = t.resultTitle;
        document.getElementById('ai-result-title').textContent = t.aiResultTitle;
        document.getElementById('stat-a').textContent = t.statA;
        document.getElementById('stat-b').textContent = t.statB;
        document.getElementById('stat-c').textContent = t.statC;
        document.getElementById('pdf-loading').textContent = t.pdfLoading;
        document.getElementById('ai-loading').textContent = t.aiLoading;
        document.getElementById('report-btn').textContent = t.reportBtn;
        document.getElementById('knowledge-title').textContent = t.knowledgeTitle;
        document.getElementById('law-title-1').textContent = t.lawTitle1;
        document.getElementById('law-content-1').textContent = t.lawContent1;
        document.getElementById('law-desc-1').textContent = t.lawDesc1;
        document.getElementById('law-title-2').textContent = t.lawTitle2;
        document.getElementById('law-content-2').textContent = t.lawContent2;
        document.getElementById('law-desc-2').textContent = t.lawDesc2;
        document.getElementById('footer-text-1').textContent = t.footerText1;
        document.getElementById('footer-text-2').textContent = t.footerText2;
        document.getElementById('modal-title').textContent = t.modalTitle;
        document.getElementById('modal-desc').textContent = t.modalDesc;
        document.getElementById('no-qualify-btn').textContent = t.noQualifyBtn;
        document.getElementById('has-qualify-btn').textContent = t.hasQualifyBtn;
        
        console.log('界面文本更新完成');
    } catch (error) {
        console.error('更新界面文本时出错:', error);
    }
}

// ==================== 基础检测功能 ====================
function performDetection(content) {
    let counts = { a: 0, b: 0, c: 0 };
    let detectedTypes = [];
    let detectedWords = [];
    
    const matchedPositions = new Set();
    const currentViolations = violations[currentLanguage];
    
    const allViolations = [
        ...currentViolations.aLevel.map(item => ({...item, level: 'a'})),
        ...currentViolations.bLevel.map(item => ({...item, level: 'b'})),
        ...currentViolations.cLevel.map(item => ({...item, level: 'c'}))
    ].sort((a, b) => b.word.length - a.word.length);
    
    allViolations.forEach(item => {
        if (qualifiedWords.has(item.word)) return;
        
        let index = content.toLowerCase().indexOf(item.word.toLowerCase());
        while (index !== -1) {
            let positionOverlap = false;
            for (let i = index; i < index + item.word.length; i++) {
                if (matchedPositions.has(i)) {
                    positionOverlap = true;
                    break;
                }
            }
            
            if (!positionOverlap) {
                for (let i = index; i < index + item.word.length; i++) {
                    matchedPositions.add(i);
                }
                
                detectedWords.push({
                    word: item.word,
                    desc: item.desc,
                    type: item.type,
                    level: item.level,
                    index: index,
                    length: item.word.length
                });
                
                if (item.level === 'a') counts.a++;
                else if (item.level === 'b') counts.b++;
                else if (item.level === 'c') counts.c++;
                
                if (!detectedTypes.includes(item.type)) detectedTypes.push(item.type);
            }
            
            index = content.toLowerCase().indexOf(item.word.toLowerCase(), index + 1);
        }
    });
    
    detectedWords.sort((a, b) => a.index - b.index);
    
    return {
        content: content,
        counts: counts,
        types: detectedTypes,
        detectedWords: detectedWords
    };
}

function displayDetectionResults(results) {
    const { content, detectedWords } = results;
    const t = translations[currentLanguage];
    
    resultContent.innerHTML = '';
    
    if (detectedWords.length === 0) {
        resultContent.innerHTML = `<p style="color: #27ae60; text-align: center;">${t.noViolations}</p>`;
        return;
    }
    
    let lastIndex = 0;
    const fragment = document.createDocumentFragment();
    
    detectedWords.forEach(detected => {
        if (detected.index > lastIndex) {
            const normalText = document.createTextNode(content.substring(lastIndex, detected.index));
            fragment.appendChild(normalText);
        }
        
        const highlightSpan = document.createElement('span');
        highlightSpan.className = `highlight highlight-${detected.level}`;
        highlightSpan.textContent = content.substring(detected.index, detected.index + detected.length);
        highlightSpan.setAttribute('data-word', detected.word);
        highlightSpan.setAttribute('data-desc', detected.desc);
        highlightSpan.setAttribute('data-type', detected.type);
        
        highlightSpan.addEventListener('click', function() {
            handleHighlightClick(this, detected.level);
        });
        
        fragment.appendChild(highlightSpan);
        lastIndex = detected.index + detected.length;
    });
    
    if (lastIndex < content.length) {
        const remainingText = document.createTextNode(content.substring(lastIndex));
        fragment.appendChild(remainingText);
    }
    
    resultContent.appendChild(fragment);
}

function handleHighlightClick(element, level) {
    const word = element.getAttribute('data-word');
    const desc = element.getAttribute('data-desc');
    const t = translations[currentLanguage];
    
    switch(level) {
        case 'a':
            showAlert(
                t.aLevelAlert.replace('{word}', word), 
                t.aLevelDesc.replace('{desc}', desc)
            );
            break;
        case 'b':
            modalText.textContent = `"${word}" - ${desc}`;
            modalText.setAttribute('data-word', word);
            qualificationModal.style.display = 'flex';
            break;
        case 'c':
            showAlert(
                t.cLevelAlert.replace('{word}', word), 
                t.cLevelDesc.replace('{desc}', desc)
            );
            break;
    }
}

// ==================== AI深度分析功能 ====================
async function performAIAnalysis() {
    const content = adContent.value.trim();
    if (!content) {
        alert(translations[currentLanguage].noContent);
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
            body: JSON.stringify({ 
                text: content,
                language: currentLanguage
            })
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
}

function formatAIText(text) {
    if (!text) return '';
    return text
        .replace(/\n/g, '<br>')
        .replace(/(【.*?】)/g, '<strong>$1</strong>')
        .replace(/(\d+\.)/g, '<br><strong>$1</strong>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

// ==================== 其他功能 ====================
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
    
    const t = translations[currentLanguage];
    let html = `<h4>${t.typeAnalysis}</h4><div class="type-tags">`;
    Object.entries(typeCounts).forEach(([type, count]) => {
        html += `<span class="type-tag">${type}(${count})</span>`;
    });
    html += '</div>';
    
    typeStatsElement.innerHTML = html;
}

function generatePDFReport() {
    const content = adContent.value.trim();
    if (!content) {
        alert(translations[currentLanguage].noContent);
        return;
    }
    
    pdfLoading.style.display = 'block';
    reportBtn.disabled = true;
    
    setTimeout(() => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const t = translations[currentLanguage];
        
        const reportTitle = currentLanguage === 'zh' ? 
            '法镜广告合规检测报告' : 'FaJing Advertisement Compliance Report';
        
        doc.setFont('helvetica');
        doc.setFontSize(18);
        doc.setTextColor(52, 152, 219);
        doc.text(reportTitle, 105, 20, { align: 'center' });
        
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
        
        pdfLoading.style.display = 'none';
        reportBtn.disabled = false;
    }, 100);
}

function showAlert(title, message) {
    alert(`【${title}】\n\n${message}`);
}

// ==================== 初始化函数 ====================
function initializeApp() {
    console.log('初始化应用...');
    
    // 获取DOM元素
    detectBtn = document.getElementById('detect-btn');
    aiDetectBtn = document.getElementById('ai-detect-btn');
    clearBtn = document.getElementById('clear-btn');
    adContent = document.getElementById('ad-content');
    resultContent = document.getElementById('result-content');
    reportBtn = document.getElementById('report-btn');
    aiResultContent = document.getElementById('ai-result-content');
    aiAnalysisResult = document.getElementById('ai-analysis-result');
    aiLoading = document.getElementById('ai-loading');
    pdfLoading = document.getElementById('pdf-loading');
    qualificationModal = document.getElementById('qualification-modal');
    modalText = document.getElementById('modal-text');
    noQualifyBtn = document.getElementById('no-qualify-btn');
    hasQualifyBtn = document.getElementById('has-qualify-btn');
    langZhBtn = document.getElementById('lang-zh');
    langEnBtn = document.getElementById('lang-en');
    
    // 绑定语言切换事件
    langZhBtn.addEventListener('click', () => switchLanguage('zh'));
    langEnBtn.addEventListener('click', () => switchLanguage('en'));
    
    // 绑定其他事件
    detectBtn.addEventListener('click', function() {
        const content = adContent.value;
        if (!content.trim()) {
            resultContent.innerHTML = `<p style="color: #e74c3c; text-align: center;">${translations[currentLanguage].noContent}</p>`;
            updateStats(0, 0, 0);
            return;
        }
        
        const detectionResults = performDetection(content);
        displayDetectionResults(detectionResults);
        updateStats(detectionResults.counts.a, detectionResults.counts.b, detectionResults.counts.c);
        updateTypeStats(detectionResults.types);
    });
    
    aiDetectBtn.addEventListener('click', performAIAnalysis);
    
    clearBtn.addEventListener('click', function() {
        adContent.value = '';
        resultContent.innerHTML = translations[currentLanguage].defaultResult;
        aiAnalysisResult.style.display = 'none';
        qualifiedWords.clear();
        updateStats(0, 0, 0);
        document.getElementById('type-stats').innerHTML = '';
    });
    
    reportBtn.addEventListener('click', generatePDFReport);
    
    noQualifyBtn.addEventListener('click', function() {
        qualificationModal.style.display = 'none';
        const t = translations[currentLanguage];
        showAlert(t.modifyAdvice, t.modifyContent);
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
    
    window.addEventListener('click', function(event) {
        if (event.target === qualificationModal) qualificationModal.style.display = 'none';
    });
    
    // 初始化界面为中文
    switchLanguage('zh');
    
    console.log('法镜·商盾广告合规检测平台已加载完成 - 多语言版本');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，开始初始化应用');
    initializeApp();
});
