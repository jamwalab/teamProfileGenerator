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
                        <div class='card'>
                            <h3 class='card-header'>
                                <p>${manager.getName()}</p>
                                <p>${manager.getRole()}</p>
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
                        <div class='card'>
                            <h3 class='card-header'>
                                <p>${engineer.getName()}</p>
                                <p>${engineer.getRole()}</p>
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
                        <div class='card'>
                            <h3 class='card-header'>
                                <p>${intern.getName()}</p>
                                <p>${intern.getRole()}</p>
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
        ${managerHTML(manager)}
        ${engineerHTML(engineer)}
        ${internHTML(intern)}
    `
}

/*    const managerHTML = managerDetails => {
        managerDetails
            .map(({name, id, email, officeNumber}) => {
                return `
                <div>
                    <h3>
                        <p>${name}</p>
                        <p>Manager</p>
                    </h3>
                    <div>
                        <p>
                    </div>
                </div>
                `
            })
    }

    return `
    
    `
}*/