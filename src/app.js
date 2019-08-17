//This the object
const app = {
    title: 'Indesicion App',
    subtitle: 'put your life in the hands of a computer',
    options: []
}

//This function take the input and push it to array object
const onFormSubmit = (e) => {
    e.preventDefault();
    let option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        appRender();
    }
}

//This function remove all the content in array
const removeList = () => {
    app.options = [];
    appRender();
}

//This function generate one option from options array
const generateOption = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const randomOption = app.options[randomNum];
    alert("you want : " + randomOption);
}

//This function render the app
const appRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <h2>{app.subtitle && <p>{app.subtitle}</p>}</h2>
            {app.options.length > 0 ? 'Here your options' : 'No options'}
            <button onClick={generateOption} disabled={app.options.length === 0}>What should i do?</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <button onClick={removeList}>Remove</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}



const appRoot = document.getElementById('app');

//optional
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }

//JSX - JavaScript XML

// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length < 1 ? "No Options" :
//             (<ol>
//                 <li>{app.options[0]}</li>
//                 <li>{app.options[1]}</li>
//             </ol>)}
//         </p>
//     </div>
// );

// const user = {
//     name: 'Amitay',
//     age: 32,
//     location: 'Rishon Le Zion'
// }


//Create templateTwo var jsx expression 
// var myTemplate = (
//     <div>
//         {<h1>{user.name ? user.name : 'Anonymous'}</h1>}
//         <p>{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}</p>
//         <p>{user.location ? user.location : undefined}</p>
//     </div>
// );

// const appRoot = document.getElementById('app');

//create "Remove all" button above list
//onClick -> wipe the array -> rerender 

appRender();
