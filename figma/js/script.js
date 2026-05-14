const getScrollPercemt = () => {
    // スクロール量
    const scrolled = window.scrollY;

    // ページ全体の高さ
    const pageHeight = document.documentElement.scrollHeight;

    // 表示領域の高さ
    const viewHeight = document.documentElement.clientHeight;

    // スクロールされた割合
    const percentage = scrolled / (pageHeight - viewHeight) * 100;

    // プログレスバーに幅を指定
    document.querySelector('#bar').style.width = `${percentage}%`;
}

// 画面上にプログレスバーを追加
window.addEventListener('scroll', getScrollPercemt);

// -------------------------------------------------------------------------
// 監視対象が範囲内に現れたら実行する動作
const showastx = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    translate: ['200px 0', 0],
                    filter: ['blur(.4rem)', 'blur(0)'],
                }, {
                duration: 2000,
                easing: 'ease',
                fill: 'forwards',
            }
            );
            // 要素領域に一度入ったら監視をやめる
            obs.unobserve(entries[0].target);
        };
    });
};

// 監視ロボットの設定
const astxObserver = new IntersectionObserver(showastx);

// astrxを監視するよう指示
astxObserver.observe(document.querySelector('#astrx'));

// -----------------------------------------------------------------------
// 監視対象が範囲内に現れたら実行する動作
const showLL = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    translate: ['200px 0', 0],
                    filter: ['blur(.4rem)', 'blur(0)'],
                }, {
                duration: 2000,
                easing: 'ease',
                fill: 'forwards',
            }
            );
            // 要素領域に一度入ったら監視をやめる
            obs.unobserve(entries[0].target);
        };
    });
};

// 監視ロボットの設定
const LLObserver = new IntersectionObserver(showLL);
// console.log(document.querySelector('#LL'));

// LLを監視するよう指示
LLObserver.observe(document.querySelector('#LL'));

// --------------------------------------------------------------------
// 監視対象が範囲内に現れたら実行する動作
const showright = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    translate: ['200px 0', 0],
                    filter: ['blur(.4rem)', 'blur(0)'],
                }, {
                duration: 2000,
                easing: 'ease',
                fill: 'forwards',
            }
            );
            // 要素領域に一度入ったら監視をやめる
            obs.unobserve(entries[0].target);
        };
    });
};

// 監視ロボットの設定
const rightObserver = new IntersectionObserver(showright);
// console.log(document.querySelector('#right'));

// rightを監視するよう指示
rightObserver.observe(document.querySelector('#right'));

// ----------------------------------------------------------------
// 監視対象が範囲内に現れたら実行する動作
const showsaber = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    translate: ['200px 0', 0],
                    filter: ['blur(.4rem)', 'blur(0)'],
                }, {
                duration: 2000,
                easing: 'ease',
                fill: 'forwards',
            }
            );
            // 要素領域に一度入ったら監視をやめる
            obs.unobserve(entries[0].target);
        };
    });
};

// 監視ロボットの設定
const saberObserver = new IntersectionObserver(showsaber);
// console.log(document.querySelector('#saber'));

// saberを監視するよう指示
saberObserver.observe(document.querySelector('#saber'));

// ----------------------------------------------------------
// 監視対象が範囲内に現れたら実行する動作
const shownano = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    translate: ['200px 0', 0],
                    filter: ['blur(.4rem)', 'blur(0)'],
                }, {
                duration: 2000,
                easing: 'ease',
                fill: 'forwards',
            }
            );
            // 要素領域に一度入ったら監視をやめる
            obs.unobserve(entries[0].target);
        };
    });
};

// 監視ロボットの設定
const nanoObserver = new IntersectionObserver(shownano);
// console.log(document.querySelector('#nano'));

// nanoを監視するよう指示
nanoObserver.observe(document.querySelector('#nano'));

// -------------------------------------------------
// 監視対象が範囲内に現れたら実行する動作
const showsorea = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    translate: ['200px 0', 0],
                    filter: ['blur(.4rem)', 'blur(0)'],
                }, {
                duration: 2000,
                easing: 'ease',
                fill: 'forwards',
            },
            );
            // 要素領域に1度入ったら監視をやめる
            obs.unobserve(entries[0].target);
        };
    })
};

// 監視ロボットの設定
const soreaObserver = new IntersectionObserver(showsorea);
// console.log(document.querySelector('#sorea'));

// soreaを監視するよう指示
soreaObserver.observe(document.querySelector('#sorea'));
