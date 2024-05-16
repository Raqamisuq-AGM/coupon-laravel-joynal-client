let file = null;

if (!file) {
    const data = localStorage.getItem("translations");
    file = data ? JSON.parse(data) : {};
}

export default function trans(key) {
    if (file.hasOwnProperty(key)) {
        return file[key];
    }

    return key;
}
