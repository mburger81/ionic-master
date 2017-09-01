export const Role = (enter: boolean, redirectRoute?: string) => {

        return (target: any) => {
            target.prototype.ionViewCanEnter = function() {
                if(this.navCtrl === undefined) {
                    throw new Error("@Role requires the target component to have a property called 'navCtrl' that is the injected NavController");
                } else {
                    console.log('ionViewCanEnter');

                    if (enter) {
                        return true;
                    } else {
                        this.navCtrl.setRoot(redirectRoute);
                        return false;
                    }
                }
            }
        }
    };