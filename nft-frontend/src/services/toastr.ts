import * as toastr from "toastr";

export class Toastr {
    error(message: string, title: string) {
        return toastr.error(
            message,
            title,
            {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-bottom-right",
                preventDuplicates: true
            });
    }

    info(message: string, title: string) {
        return toastr.info(
            message,
            title,
            {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-bottom-right",
                preventDuplicates: true
            });
    }
    success(message: string, title: string) {
        return toastr.success(message, title,
            {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-bottom-right",
                preventDuplicates: true
            });
    }

    log(message: string, title: string) {
        return this.info(message, title);
    }
}