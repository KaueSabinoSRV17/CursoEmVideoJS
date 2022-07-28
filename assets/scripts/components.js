function component(tag, msg, id, cls) {
    // Teste: uma função com id e classe, um de cada, ou nenhum
        let id_and_class = id != null && cls != null
        let id_only = id != null
        let cls_only = cls != null
    // COndicionais
        if (id_and_class) {return `<${tag} id="${id}" class="${cls}">${msg}</${tag}>`} 
        else if (id_only) {return `<${tag} id="${id}">${msg}</${tag}>`} 
        else if (cls_only) {return `<${tag} class="${cls}">${msg}</${tag}>`} 
        else return `<${tag}>${msg}</${tag}>`
}

export default component