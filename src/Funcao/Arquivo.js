export const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onloadend = function () {
                const base64String = reader.result.split(",")[1];
                console.log(base64String);
                resolve(base64String);
            };

            reader.onerror = function (error) {
                reject(error);
            };
        } else {
            reject(new Error("File not provided"));
        }
    });
};