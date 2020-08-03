import isValidContainer from './validators/checkValidContainer.js';
import insertForm from './insertElements/insertForm.js';
import documentReady from './validators/documentReady.js';
import checkIfObjectIsArray from './validators/checkArray.js';
import availableOptions from "./utils/availableOptions.js";

export default function FormBuilder(selector, options, onSubmit) {
    documentReady(function () {
        let element = document.querySelector(selector);
        if (!isValidContainer(element)) {
            {
                throw Error("Target container is not a DOM element.");
            }
        }

        if (!checkIfObjectIsArray(options)) {
            {
                throw Error("Options are not valid");
            }
        }

        insertForm(element, "builder_form", onSubmit);

        let form = document.getElementsByName("builder_form")[0];

        if (form) {
            options.forEach((item) => {
                availableOptions[item.inputType](item, form);
            })
        }

        let submitButton = document.getElementById("form-builder-submit-button");
        if (submitButton) {
            submitButton.addEventListener("click", function (e) {
                e.preventDefault();
                let data = new FormData(document.getElementsByName('builder_form')[0]);
                data = data.entries();
                let obj = data.next();
                let retrieved = {};
                while (undefined !== obj.value) {
                    retrieved[obj.value[0]] = obj.value[1];
                    obj = data.next();
                }
                onSubmit(retrieved)
                return false;
            })
        }
    })
}