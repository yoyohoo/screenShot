(function () {
    var b = document.body, // shot target
        l = 'https://cdn.bootcdn.net/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.js',
        e = document.createElement('script'),
        s = document.createElement('script'),
        base64ToBlob = function (code) {
            let parts = code.split(';base64,');
            let contentType = parts[0].split(':')[1];
            let raw = window.atob(parts[1]);
            let rawLength = raw.length;
            let uInt8Array = new Uint8Array(rawLength);
            for (let i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
            return new Blob([uInt8Array], {
                type: contentType
            });
        };
    s.src = l;
    document.head.appendChild(s);
    s.onload = () =>
        html2canvas(b, {
            allowTaint: false,
            useCORS: true,
        }).then(function (c) {
            var a = document.createElement('a');
            var blob = base64ToBlob(c.toDataURL());
            a.target = 'download';
            a.setAttribute('href', URL.createObjectURL(blob));
            a.click();
        })
})(window);
