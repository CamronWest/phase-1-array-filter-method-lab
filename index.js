


findMatching = (drivers, name) =>{
    const findName = drivers.filter(drivers => name.toLowerCase() === drivers.toLowerCase());
    return !!findName ? findName : [];
}
    




function fuzzyMatch(drivers, name) {
    return drivers.filter((posiblematch) => posiblematch.toLowerCase().indexOf(name.toLowerCase()) === 0);
}

function matchName (driver, name){
    return driver.filter((record) => record.name === name);
}

