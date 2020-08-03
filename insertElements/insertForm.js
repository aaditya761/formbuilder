import styles from '../styles/styles.js';

export default function insertForm(element, formName, onsubmitted) {
    let container = document.createElement("DIV");
    container.setAttribute("style", styles.container);

    let form = document.createElement("Form");
    form.setAttribute("style", styles.form)
    form.setAttribute("onsubmit",   "return " +onsubmitted+"()")
    form.name = formName
    container.appendChild(form)

    element.appendChild(container);


}