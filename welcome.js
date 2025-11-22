// =======================================================
// 👑 بطاقة ترحيب ملكيّة بنقاط ذهبية — نسخة PREMIUM Dots
// =======================================================

// ننتظر تحميل غرفة الشات
function waitForRoom() {
    const roomDiv = document.getElementById('d2');
    if (!roomDiv) {
        setTimeout(waitForRoom, 400);
        return;
    }
    startWelcomeObserver(roomDiv);
}

waitForRoom();

// مراقبة دخول الأعضاء
function startWelcomeObserver(roomDiv) {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType !== 1) return;
                if (!node.classList.contains('uzr')) return;

                const msgDiv = node.querySelector('.u-msg');
                const msg = msgDiv ? msgDiv.textContent : "";
                if (!msg.includes("انضم")) return;

                let userName = "ضيف";

                const topic = node.querySelector('.u-topic');
                const nick = node.querySelector('.u-nick');
                const title = node.querySelector('.u-ico');

                if (topic && topic.textContent.trim()) userName = topic.textContent.trim();
                else if (nick && nick.textContent.trim()) userName = nick.textContent.trim();
                else if (title && title.textContent.trim()) userName = title.textContent.trim();

                if (userName.includes("زائر")) return;

                showWelcomeCard(userName);
            });
        });
    });

    observer.observe(roomDiv, { childList: true, subtree: true });
}

// =======================================================
// 👑 البطاقة الملكيّة بخلفية نقطية ذهبية
// =======================================================
function showWelcomeCard(userName) {

    const old = document.getElementById("welcomeCard");
    if (old) old.remove();

    let card = document.createElement("div");
    card.id = "welcomeCard";

    Object.assign(card.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) scale(0.6)",
        minWidth: "390px",
        maxWidth: "500px",
        padding: "40px 30px",
        background: "rgba(22,22,40,0.85)",
        color: "#fff",
        borderRadius: "20px",
        textAlign: "center",
        zIndex: "9999",
        opacity: "0",
        overflow: "hidden",
        transition: "all 0.8s cubic-bezier(.17,.67,.38,1.35)",
        boxShadow: "0 0 35px rgba(255,215,0,0.4)",
        backdropFilter: "blur(18px)"
    });

    // HTML للبطاقة
    card.innerHTML = `

        <!-- الخلفية النقاطيّة الذهبية -->
        <div style="
            position:absolute;
            inset:0;
            background:
                radial-gradient(circle at 10% 20%, rgba(255,215,0,0.20) 0%, transparent 60%),
                radial-gradient(circle at 80% 30%, rgba(255,215,0,0.15) 0%, transparent 65%),
                radial-gradient(circle at 50% 80%, rgba(255,215,0,0.18) 0%, transparent 70%),
                repeating-radial-gradient(circle, rgba(255,255,255,0.09) 0 2px, transparent 3px 14px);
            opacity: 0.25;
            animation: floatDots 7s infinite alternate ease-in-out;
            pointer-events:none;
        "></div>

        <!-- محتوى البطاقة -->
        <div style="position:relative; z-index:10;">
        
            <div style="
                font-size: 50px;
                margin-bottom: 15px;
                filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
            ">👑✨</div>

            <div style="
                font-size: 24px;
                opacity: 0.9;
                margin-bottom: 10px;
                text-shadow: 0 2px 4px rgba(0,0,0,0.4);
            ">أهلاً وسهلاً بقدومك</div>

            <div style="
                font-size: 36px;
                margin: 15px 0 20px 0;
                font-weight: 800;
                background: linear-gradient(90deg, #FFD700 0%, #FFB300 50%, #FFD700 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: 0 0 18px rgba(255,210,0,0.5);
                position: relative;
                display: inline-block;
            ">
                ${userName}
                <span style="
                    position:absolute;
                    top:0;
                    left:-120%;
                    height:100%;
                    width:100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
                    animation: shine 1.8s infinite;
                "></span>
            </div>

            <div style="
                font-size: 19px;
                padding: 10px 18px;
                background: rgba(255,255,255,0.1);
                border-radius: 14px;
                display: inline-block;
                box-shadow: 0 0 10px rgba(255,255,255,0.15);
                text-shadow: 0 2px 4px rgba(0,0,0,0.3);
            ">☀نــــورر المكان ☀</div>

        </div>

        <!-- أنيميشن الخلفية واللمعة -->
        <style>
            @keyframes shine {
                0% { left: -120%; }
                100% { left: 220%; }
            }

            @keyframes floatDots {
                0% { transform: translate(0,0); }
                100% { transform: translate(10px,-10px); }
            }
        </style>
    `;

    document.body.appendChild(card);

    // الظهور الفخم
    setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translate(-50%, -50%) scale(1)";
    }, 50);

    // الاختفاء الملكي
    setTimeout(() => {
        card.style.opacity = "0";
        card.style.transform = "translate(-50%, -50%) scale(0.8)";
        setTimeout(() => card.remove(), 900);
    }, 4000);
}
