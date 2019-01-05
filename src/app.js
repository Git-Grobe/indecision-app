console.log('App.js is running!!!!!!!!');

// JSX - JavaScript XML

const app = {
    title: 'Some Title',
    subtitle: 'Some subtitle',
    options: ['One' , 'Two'] 
};

const template = (
    <div>
        <h1>{app.title.toUpperCase() + '!'}</h1>
        {app.subtitle && <p>{app.subtitle + '!'}  </p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        
        <ol>
            <li>ah</li>
            <li>no</li>
            <li>oh</li>
            <li>ya</li>
        </ol>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

  