class Credential{
    constructor(showIcon,hideIcon,box){
        this.showIconId = document.getElementById(showIcon)
        this.hideIconId = document.getElementById(hideIcon)
        this.boxId = document.getElementById(box)
    }

    showPassword(){
        this.boxId.setAttribute('type','text');
        this.showIconId.style.cssText = "display:none;";
        this.hideIconId.style.cssText = "display:block;";
    }

    hidePassword(){
        this.boxId.setAttribute('type','password');
        this.showIconId.style.cssText = "display:block;";
        this.hideIconId.style.cssText = "display:none;";
    }
}