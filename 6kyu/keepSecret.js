function createSecretHolder(secret){
    let b = secret;
    return {
        setSecret(newSecret = 5){
           b = newSecret
        }
    }
}