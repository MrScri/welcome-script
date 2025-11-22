// ============================
// 1) إضافة الـ CSS أولاً
// ============================
$(`<style>
ul.nav.nav-tabs.fl li a {
    text-align: center;
    padding: 0px 0!important;
    border: 0 solid #4c4b4b;
    color:#2E576E;
    border-radius: 25px;
    background: #fff;
}
ul.nav.nav-tabs.fl li {
    width: 33.3%;
    margin-left: 0;
    border-radius: 50px;
    margin-bottom: 5px!important;
}
div#l2 input#pass1, div#l2 input#u2, div#l3 input#pass2, div#l3 input#u3 {
    padding: 0px 0px!important;
    border-radius: 25px!important;
    border: 1px solid #e1e0e0;
    text-align: center;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 1px 2px rgb(107 32 49);
    border: 1px solid white;
    height: 27px!important;
    border: 1px solid #dedede!important;
    text-align: center;
    width: 49%!important;
    padding: 0!important;
    float: right;
    margin: 2px 3px 2px 0;
}
div#l2 button {
    border-radius: 24px!important;
    height: 27px;
    padding: 0px 5px;
    width: 98%;
    margin-left: 4px;
    margin-top: 5px!important;
    box-shadow: inset 0 0px 0 rgb(255 255 255), 0 2px 0px rgb(252 199 209);
    border-color: #FFFFFF!important;
}
.nav-tabs{
    background-color: #bfbfbfa6!important;
    border-radius: 24px!important;
    margin-top: 2px!important;
    float: right;
    padding: 3px 1px;
    border-top: 0px solid;
    border-color: #2E576E;
    height: 30px!important;
}
#u1 {
    padding: 0px 0px!important;
    margin-left: -6px;
    border-radius: 25px!important;
    border: 1px solid #e1e0e0;
    text-align: center;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 1px 2px rgb(107 32 49);
    border: 1px solid white;
    height: 27px!important;
    width: 100%!important;
    margin-top: 1px!important;
}
div#l1 input#u1, div#l3 button, div#l1 button {
    border-radius: 24px!important;
    height: 27px;
    padding: 0px 5px;
    width: 98%;
    margin-left: 4px;
    margin-top: 5px!important;
    box-shadow: inset 0 0px 0 rgb(255 255 255), 0 2px 0px rgb(252 199 209);
    border-color: #FFFFFF!important;
}
#tlogins .fa.fa-eye {
    position: relative;
    margin: -25px 17px 2px 0px!important;
    color: #fff!important;
}
</style>`).insertBefore("body");


// ============================
// 2) سكربت الترحيب الخفيف
// ============================
const roomDiv = document.getElementById('d2');

let welcomeTimeout = null;

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1 && node.classList.contains('uzr')) {

                const msg = node.querySelector('.u-msg');
                if (!msg) return;

                const text = msg.textContent || "";
                if (!(text.includes("انضم") || text.includes("انضم الى"))) return;

                const nameSpan = node.querySelector('.u-topic');
                if (!nameSpan) return;

                const userName = nameSpan.textContent.trim();
                if (!userName || userName.includes("زائر")) return;

                const old = document.getElementById("welcomeCard");
                if (old) old.remove();

                let card = document.createElement("div");
                card.id = "welcomeCard";

                Object.assign(card.style, {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(0.8)",
                    minWidth: "360px",
                    maxWidth: "450px",
                    padding: "28px 25px",
                    background: "linear-gradient(145deg, #667eea, #764ba2)",
                    color: "#fff",
                    fontSize: "24px",
                    fontWeight: "700",
                    textAlign: "center",
                    borderRadius: "18px",
                    boxShadow: "0 18px 40px -10px rgba(0,0,0,0.45)",
                    zIndex: "9999",
                    opacity: "0",
                    transition: "all 0.5s ease",
                    fontFamily: "Segoe UI, sans-serif",
                });

                card.innerHTML = `
                    <div style="font-size: 40px; margin-bottom: 12px; text-shadow: 0 3px 6px rgba(0,0,0,0.3);">👋✨</div>
                    <div style="font-size: 20px; opacity: .95;">أهلاً وسهلاً</div>
                    <div style="
                        color: #FFD700;
                        font-size: 30px;
                        margin: 10px 0;
                        font-weight: 800;
                        background: linear-gradient(45deg, #FFD700, #FFA500);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    ">${userName}</div>
                    <div style="
                        font-size: 17px;
                        margin-top: 10px;
                        opacity: .9;
                        padding: 6px 14px;
                        background: rgba(255,255,255,0.08);
                        border-radius: 10px;
                        display: inline-block;
                    ">🌹🌟 نورت  الشات 🌹🌟</div>
                `;

                document.body.appendChild(card);

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translate(-50%, -50%) scale(1)";
                }, 50);

                clearTimeout(welcomeTimeout);
                welcomeTimeout = setTimeout(() => {
                    card.style.opacity = "0";
                    card.style.transform = "translate(-50%, -50%) scale(0.8)";
                    setTimeout(() => card.remove(), 500);
                }, 3200);
            }
        });
    });
});

observer.observe(roomDiv, { childList: true, subtree: true });
