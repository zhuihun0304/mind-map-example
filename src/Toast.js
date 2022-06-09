export function Toast(msg,duration) {
    clearTimeout(timer)
    duration = isNaN(duration) ? 300 : duration;
    var m = document.createElement("div");
    m.innerHTML = msg;
    m.style.cssText =
      "position: fixed;top: 10%;left: 50%;padding:5px 10px;z-index:99999;width: auto;min-width: 96px;max-width: 70%;max-height: 70%;overflow: auto; color: white;word-break: break-all;text-align: center;background-color: rgba(0, 0, 0, 0.7);border-radius: 8px;transform: translate(-50%, -50%);pointer-events: all;font-size: 15px;line-height: 1.5;box-sizing: border-box;";
    document.body.appendChild(m);
    var timer = setTimeout(() => {
            var d = 0.5;
            m.style.transition ="transform " + d + "s ease-in, opacity " + d + "s ease-in";
            m.style.opacity = "0";
            setTimeout(() => {
                document.body.removeChild(m);
            },d * 1000)
        },duration)
}