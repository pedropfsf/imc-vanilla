class ButtonSwitchStyle {
    constructor(
        theme,
        {
            elementSwitch, 
            elementCircle,
            texts, 
            areaInputs, 
            svgs, 
            button, 
            main
        }
    ) {
        this._theme = theme;
        this.elementSwitch = elementSwitch;
        this.elementCircle = elementCircle;
        this._value = window.localStorage.getItem('theme-imc') || "light";
        this._imc = 0
        this._texts = texts;
        this._areaInputs = areaInputs;
        this._svgs = svgs;
        this._button = button;
        this._main = main;
    }

    set value(value) {
        this._value = value;
    }
    get value() {
        return this._value
    }

    set theme(value) {
        this._theme = value;
    }
    get theme() {
        return this._theme
    }

    set imc(value) {
        this._imc = value;
    }
    get imc() {
        return this._imc;
    }

    set texts(value) {
        this._texts = value;
    }
    get texts() {
        return this._texts;
    }

    set areaInputs(value) {
        this._areaInputs = value;
    }
    get areaInputs() {
        return this._areaInputs;
    }

    set svgs(value) {
        this._svgs = value;
    }
    get svgs() {
        return this._svgs;
    }

    set button(value) {
        this._button = value;
    }
    get button() {
        return this._button;
    }

    set main(value) {
        this._main = value;
    }
    get main() {
        return this._main;
    }

    loadButton() {
        this.eventsClickButton();
        this.renderButton();
    }

    eventsClickButton() {
        this.elementSwitch.addEventListener('click', () => {
            this.toggleThemeButton();
        }, true);
    }
    
    setStyleTheme(imc) {
        this.imc = imc;

        const [
            underWeightColor,
            normalColor,
            aboutWeightColor,
            obesityColor,
            severeObesityColor
        ] = this.theme;

        function ifIMCStyle({
            defaultAction,
            underWeightAction,
            aboutWeightAction,
            normalAction,
            obesityAction,
            severeObesityAction
        }) {
            if(imc === 0) {
                defaultAction();
            } else if(imc < 18.5) {
                underWeightAction();
            } else if(imc >= 18.5 && imc <= 24.9) {
                normalAction();
            } else if(imc >= 25.0 && imc <= 29.9) {
                aboutWeightAction();
            } else if(imc >= 30.0 && imc <= 39.9) {
                obesityAction();
            } else {
                severeObesityAction();
            }

        }

        ifIMCStyle({
            defaultAction: () => {
                this.actionSwitch({
                    value: this.value,
                    actionLight: () => {
                        this.main.style.backgroundColor = "var(--gray-light)";
                        this.svgs.forEach(svg => {
                            const paths = [ ...svg.children ]

                            paths.forEach(path => {
                                path.setAttribute("fill", "var(--dark)");
                            })
                        });
                        this.areaInputs.forEach(areaInput => {
                            areaInput.style.backgroundColor = "var(--gray)";
                            areaInput.style.color = "var(--dark)";

                            const input = areaInput.children[1];

                            input.classList.add("placeholder-default");

                            input.classList.remove("placeholder-dark-underWeight");
                            input.classList.remove("placeholder-dark-aboutWeight");
                            input.classList.remove("placeholder-dark-normal");
                            input.classList.remove("placeholder-dark-obesity");
                            input.classList.remove("placeholder-dark-severeObesity");

                            input.classList.remove("placeholder-light-underWeight");
                            input.classList.remove("placeholder-light-aboutWeight");
                            input.classList.remove("placeholder-light-normal");
                            input.classList.remove("placeholder-light-obesity");
                            input.classList.remove("placeholder-light-severeObesity");
                            input.style.color = "var(--dark)";
                        });

                        this.button.style.backgroundColor = "var(--gray)";
                        this.button.style.color = "var(--dark)";
                        this.texts.forEach(text => {
                            text.style.color = "var(--texts)";
                        });
                    },
                    actionDark: () => {
                        this.main.style.backgroundColor = "var(--dark)";
                        this.svgs.forEach(svg => {
                            const paths = [ ...svg.children ]

                            paths.forEach(path => {
                                path.setAttribute("fill", "var(--dark)");
                            })
                        });
                        this.areaInputs.forEach(areaInput => {
                            areaInput.style.backgroundColor = "var(--gray)";
                            areaInput.style.color = "var(--dark)";

                            const input = areaInput.children[1];

                            input.classList.add("placeholder-light-default");
                            input.classList.remove("placeholder-dark-default");
                            input.style.color = "var(--dark)";
                        });

                        this.button.style.backgroundColor = "var(--gray)";
                        this.button.style.color = "var(--dark)";
                        this.texts.forEach(text => {
                            text.style.color = "var(--light)";
                        });
                    }
                })
            },

            underWeightAction: () => {
                const { light, dark } = underWeightColor;

                this.actionSwitch({
                    value: this.value,
                    actionLight: () => {
                        this.main.style.backgroundColor = light;
                        this.svgs.forEach(svg => {
                            const paths = [ ...svg.children ]

                            paths.forEach(path => {
                                path.setAttribute("fill", light);
                            })
                        });
                        this.areaInputs.forEach(areaInput => {
                            areaInput.style.backgroundColor = dark;
                            areaInput.style.color = light;

                            const input = areaInput.children[1];

                            input.classList.add("placeholder-light-underWeight");
                            input.classList.remove("placeholder-dark-underWeight");
                            input.style.color = light;
                        });

                        this.button.style.backgroundColor = dark;
                        this.button.style.color = light;
                        this.texts.forEach(text => {
                            text.style.color = dark;
                        });
                    },
                    actionDark: () => {
                        this.main.style.backgroundColor = dark;
                        this.svgs.forEach(svg => {
                            const paths = [ ...svg.children ]

                            paths.forEach(path => {
                                path.setAttribute("fill", dark);
                            })
                        });
                        this.areaInputs.forEach(areaInput => {
                            areaInput.style.backgroundColor = light;
                            areaInput.style.color = dark;

                            const input = areaInput.children[1];

                            input.classList.add("placeholder-dark-underWeight");
                            input.classList.remove("placeholder-light-underWeight");
                            input.style.color = dark;
                        });

                        this.button.style.backgroundColor = light;
                        this.button.style.color = dark;
                        this.texts.forEach(text => {
                            text.style.color = light;
                        });
                    }
                });
            },

            aboutWeightAction: () => {
                const { light, dark } = aboutWeightColor;

                this.actionSwitch({
                    value: this.value,
                    actionLight: () => {
                        this.main.style.backgroundColor = light;
                        this.svgs.forEach(svg => {
                            const paths = [ ...svg.children ]

                            paths.forEach(path => {
                                path.setAttribute("fill", light);
                            })
                        });
                        this.areaInputs.forEach(areaInput => {
                            areaInput.style.backgroundColor = dark;
                            areaInput.style.color = light;

                            const input = areaInput.children[1];

                            input.classList.add("placeholder-light-aboutWeight");
                            input.classList.remove("placeholder-dark-aboutWeight");
                            input.style.color = light;
                        });

                        this.button.style.backgroundColor = dark;
                        this.button.style.color = light;
                        this.texts.forEach(text => {
                            text.style.color = dark;
                        });
                    },
                    actionDark: () => {
                        this.main.style.backgroundColor = dark;
                        this.svgs.forEach(svg => {
                            const paths = [ ...svg.children ]

                            paths.forEach(path => {
                                path.setAttribute("fill", dark);
                            })
                        });
                        this.areaInputs.forEach(areaInput => {
                            areaInput.style.backgroundColor = light;
                            areaInput.style.color = dark;

                            const input = areaInput.children[1];

                            input.classList.add("placeholder-dark-aboutWeight");
                            input.classList.remove("placeholder-light-aboutWeight");
                            input.style.color = dark;
                        });

                        this.button.style.backgroundColor = light;
                        this.button.style.color = dark;
                        this.texts.forEach(text => {
                            text.style.color = light;
                        });
                    }
                })
            },

            normalAction: () => {
                const { light, dark } = normalColor;

                this.actionSwitch({
                    value: this.value,
                    actionLight: () => {
                        this.main.style.backgroundColor = light;
                        this.svgs.forEach(svg => {
                            const paths = [ ...svg.children ]

                            paths.forEach(path => {
                                path.setAttribute("fill", light);
                            })
                        });
                        this.areaInputs.forEach(areaInput => {
                            areaInput.style.backgroundColor = dark;
                            areaInput.style.color = light;

                            const input = areaInput.children[1];

                            input.classList.add("placeholder-light-normal");
                            input.classList.remove("placeholder-dark-normal");
                            input.style.color = light;
                        });

                        this.button.style.backgroundColor = dark;
                        this.button.style.color = light;
                        this.texts.forEach(text => {
                            text.style.color = dark;
                        });
                    },
                    actionDark: () => {
                        this.main.style.backgroundColor = dark;
                        this.svgs.forEach(svg => {
                            const paths = [ ...svg.children ]

                            paths.forEach(path => {
                                path.setAttribute("fill", dark);
                            })
                        });
                        this.areaInputs.forEach(areaInput => {
                            areaInput.style.backgroundColor = light;
                            areaInput.style.color = dark;

                            const input = areaInput.children[1];

                            input.classList.add("placeholder-dark-normal");
                            input.classList.remove("placeholder-light-normal");
                            input.style.color = dark;
                        });

                        this.button.style.backgroundColor = light;
                        this.button.style.color = dark;
                        this.texts.forEach(text => {
                            text.style.color = light;
                        });
                    }
                })
            },

            obesityAction: () => {
                const { light, dark } = obesityColor;

                this.actionSwitch({
                    value: this.value,
                    actionLight: () => {
                        this.main.style.backgroundColor = light;
                        this.svgs.forEach(svg => {
                            const paths = [ ...svg.children ]

                            paths.forEach(path => {
                                path.setAttribute("fill", light);
                            })
                        });
                        this.areaInputs.forEach(areaInput => {
                            areaInput.style.backgroundColor = dark;
                            areaInput.style.color = light;

                            const input = areaInput.children[1];

                            input.classList.add("placeholder-light-obesity");
                            input.classList.remove("placeholder-dark-obesity");
                            input.style.color = light;
                        });

                        this.button.style.backgroundColor = dark;
                        this.button.style.color = light;
                        this.texts.forEach(text => {
                            text.style.color = dark;
                        });
                    },
                    actionDark: () => {
                        this.main.style.backgroundColor = dark;
                        this.svgs.forEach(svg => {
                            const paths = [ ...svg.children ]

                            paths.forEach(path => {
                                path.setAttribute("fill", dark);
                            })
                        });
                        this.areaInputs.forEach(areaInput => {
                            areaInput.style.backgroundColor = light;
                            areaInput.style.color = dark;

                            const input = areaInput.children[1];

                            input.classList.add("placeholder-dark-normal");
                            input.classList.remove("placeholder-light-normal");
                            input.style.color = dark;
                        });

                        this.button.style.backgroundColor = light;
                        this.button.style.color = dark;
                        this.texts.forEach(text => {
                            text.style.color = light;
                        });
                    }
                })
            },

            severeObesityAction: () => {
                const { light, dark } = severeObesityColor;

                this.actionSwitch({
                    value: this.value,
                    actionLight: () => {
                        this.main.style.backgroundColor = light;
                        this.svgs.forEach(svg => {
                            const paths = [ ...svg.children ]

                            paths.forEach(path => {
                                path.setAttribute("fill", light);
                            })
                        });
                        this.areaInputs.forEach(areaInput => {
                            areaInput.style.backgroundColor = dark;
                            areaInput.style.color = light;

                            const input = areaInput.children[1];

                            input.classList.add("placeholder-light-severeObesity");
                            input.classList.remove("placeholder-dark-severeObesity");
                            input.style.color = light;
                        });

                        this.button.style.backgroundColor = dark;
                        this.button.style.color = light;
                        this.texts.forEach(text => {
                            text.style.color = dark;
                        });
                    },
                    actionDark: () => {
                        this.main.style.backgroundColor = dark;
                        this.svgs.forEach(svg => {
                            const paths = [ ...svg.children ]

                            paths.forEach(path => {
                                path.setAttribute("fill", dark);
                            })
                        });
                        this.areaInputs.forEach(areaInput => {
                            areaInput.style.backgroundColor = light;
                            areaInput.style.color = dark;

                            const input = areaInput.children[1];

                            input.classList.add("placeholder-dark-severeObesity");
                            input.classList.remove("placeholder-light-severeObesity");
                            input.style.color = dark;
                        });

                        this.button.style.backgroundColor = light;
                        this.button.style.color = dark;
                        this.texts.forEach(text => {
                            text.style.color = light;
                        });
                    }
                })
            }
        })
    }

    setTheme(value) {
        window.localStorage.setItem('theme-imc', value);
        this.value = window.localStorage.getItem('theme-imc');
        this.renderButton();
        this.setStyleTheme(this.imc);
    }

    toggleThemeButton() {
        this.actionSwitch({
            value: this.value,
            actionLight: () => {
                this.setTheme("dark");
            },
            actionDark: () => {
                this.setTheme("light");
            }
        });
    }

    renderButton() {
        this.actionSwitch({
            value: this.value,
            actionLight: () => {
                this.elementCircle.style.left = "20%";
            },
            actionDark: () => {
                this.elementCircle.style.left = "80%";
            }
        });
    }

    actionSwitch({ 
        value, 
        actionLight, 
        actionDark 
    }) {
        switch(value) {
            case "light":
                actionLight();
                break;
            case "dark":
                actionDark();
                break;
            default:
                return new Error("action invalidate");
        }
    }
}