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
                        <div>
                            <h3>
                                <p>${manager.getName()}</p>
                                <p>${manager.getRole()}</p>
                            </h3>
                            <div>
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
                        <div>
                            <h3>
                                <p>${engineer.getName()}</p>
                                <p>${engineer.getRole()}</p>
                            </h3>
                            <div>
                                <p>ID: ${engineer.getId()}</p>
                                <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                                <p>GitHub: ${engineer.getGithub()}</p>
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
                        <div>
                            <h3>
                                <p>${intern.getName()}</p>
                                <p>${intern.getRole()}</p>
                            </h3>
                            <div>
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