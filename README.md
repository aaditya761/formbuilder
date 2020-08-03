# formbuilder
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script type="module">
        // !!!!!IMPORTANT !!!!!
        // ES6 is being used in this code. For  production it should be transpiled using a tool  like babel
        import FormBuilder from "./FormBuilder.js";

        //Only input text, email and textarea are available as of now
        //inputType is the key which identifies the type of form element
        //If this key is not present there will be an error
        import options from "./utils/options.js";

        function onSubmitted(data) {
            //data received hit api or whatever can be done with the data
            console.log(data)
        }

        //FormBuilder takes three arguments :
        // 1)The element selector in which the form is to be inserted
        // 2)The array of data containing the configuration for inserting form elements
        // 3) The function to capture data which can be sent to an API
        FormBuilder("#builder", options, onSubmitted);
    </script>
</head>
<body>
<div id='builder'></div>
</body>
</html>
```
