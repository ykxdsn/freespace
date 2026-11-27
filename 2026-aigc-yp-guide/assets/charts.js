(function () {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var accent3 = style.getPropertyValue('--accent3').trim();
  var gold = style.getPropertyValue('--gold').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();

  /* ---------- 评审权重 ---------- */
  var weightEl = document.getElementById('chart-weight');
  if (weightEl) {
    var wChart = echarts.init(weightEl, null, { renderer: 'svg' });
    var labels = ['文档规范', '创意与表达', '主题契合与价值导向', '原创与合规', 'AI 应用与迭代', '完成度与质量'];
    var values = [5, 15, 20, 20, 20, 20];
    wChart.setOption({
      animation: false,
      grid: { left: 8, right: 40, top: 16, bottom: 8, containLabel: true },
      tooltip: { trigger: 'axis', appendToBody: true, axisPointer: { type: 'shadow' } },
      xAxis: {
        type: 'value',
        max: 25,
        axisLabel: { color: muted, fontSize: 11 },
        splitLine: { lineStyle: { color: rule } },
        axisLine: { show: false },
        axisTick: { show: false }
      },
      yAxis: {
        type: 'category',
        data: labels,
        axisLabel: { color: ink, fontSize: 12 },
        axisLine: { lineStyle: { color: rule } },
        axisTick: { show: false }
      },
      series: [{
        type: 'bar',
        data: values,
        barWidth: 16,
        itemStyle: {
          borderRadius: [0, 8, 8, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: accent },
            { offset: 1, color: accent2 }
          ])
        },
        label: { show: true, position: 'right', color: muted, fontSize: 11, formatter: '{c}' }
      }]
    });
    window.addEventListener('resize', function () { wChart.resize(); });
  }

  /* ---------- 能力雷达 ---------- */
  var radarEl = document.getElementById('chart-radar');
  if (radarEl) {
    var rChart = echarts.init(radarEl, null, { renderer: 'svg' });
    rChart.setOption({
      animation: false,
      color: [accent, accent2, accent3, gold],
      tooltip: { appendToBody: true },
      legend: {
        bottom: 0,
        itemWidth: 12,
        itemHeight: 12,
        textStyle: { color: muted, fontSize: 12 }
      },
      radar: {
        center: ['50%', '47%'],
        radius: '62%',
        indicator: [
          { name: '主题表达', max: 5 },
          { name: '视觉审美', max: 5 },
          { name: '叙事节奏', max: 5 },
          { name: '技术实现', max: 5 },
          { name: '交互功能', max: 5 },
          { name: '过程记录', max: 5 }
        ],
        axisName: { color: ink, fontSize: 12 },
        splitLine: { lineStyle: { color: rule } },
        splitArea: { areaStyle: { color: ['rgba(255,255,255,0)', 'rgba(42,91,255,0.025)'] } },
        axisLine: { lineStyle: { color: rule } }
      },
      series: [{
        type: 'radar',
        symbolSize: 4,
        lineStyle: { width: 2 },
        areaStyle: { opacity: 0.08 },
        data: [
          { name: 'AI 图像设计', value: [5, 5, 2, 4, 1, 5] },
          { name: 'AI 动态海报', value: [4, 4, 5, 4, 2, 4] },
          { name: 'AI 交互网页', value: [3, 3, 3, 5, 5, 4] },
          { name: '智能体设计', value: [4, 2, 2, 4, 5, 5] }
        ]
      }]
    });
    window.addEventListener('resize', function () { rChart.resize(); });
  }
})();
