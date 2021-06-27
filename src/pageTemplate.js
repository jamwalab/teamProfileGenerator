module.exports = teamData => {
    const {manager, engineer, intern} = teamData;

    /*manager.forEach(manager => {
        console.log(manager.getName(), manager.getId(), manager.getEmail());
    });*/

    const managerHTML = managerData => {
        if (managerData.length === 0) {
            return '';
        }
        return `
            ${managerData
                .map(manager => {
                    return `
                        <div class='card col-3'>
                            <h3 class='card-header'>
                                <p>${manager.getName()}</p>
                                <p><span class="oi oi-person mr-2"></span>${manager.getRole()}</p>
                            </h3>
                            <div class='card-body'>
                                <p>ID: ${manager.getId()}</p>
                                <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                                <p>Office number: ${manager.officeNumber}</p>
                            </div>
                        </div>
                    `
                })
                .join("")
            }
        `
    }

    const engineerHTML = engineerData => {
        if (engineerData.length === 0) {
            return '';
        }
        return `
            ${engineerData
                .map(engineer => {
                    return `
                        <div class='card col-3'>
                            <h3 class='card-header'>
                                <p>${engineer.getName()}</p>
                                <p><span class="oi oi-wrench mr-2"></span>${engineer.getRole()}</p>
                            </h3>
                            <div class='card-body'>
                                <p>ID: ${engineer.getId()}</p>
                                <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                                <p>GitHub: <a href='${engineer.getGithub()}' target='_blank'>${engineer.github}</a></p>
                            </div>
                        </div>
                    `
                })
                .join("")
            }
        `
    }

    const internHTML = internData => {
        if (internData.length === 0) {
            return '';
        }
        return `
            ${internData
                .map(intern => {
                    return `
                        <div class='card col-3'>
                            <h3 class='card-header'>
                                <p>${intern.getName()}</p>
                                <p><span class="oi oi-pencil mr-2"></span>${intern.getRole()}</p>
                            </h3>
                            <div class='card-body'>
                                <p>ID: ${intern.getId()}</p>
                                <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                                <p>School: ${intern.getSchool()}</p>
                            </div>
                        </div>
                    `
                })
                .join("")
            }
        `
    }

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="flex-row justify-space-between align-center pageHeader">
                <h1 class='py-3'>My Team</h1>   
            </div>
        </header>
        <main class="my-5">  
            <section class="d-flex flex-wrap justify-content-center" id="portfolio">
    ${managerHTML(manager)}
    ${engineerHTML(engineer)}
    ${internHTML(intern)}
            </section>
          
        </main>

    </body>
    </html>
    `
}