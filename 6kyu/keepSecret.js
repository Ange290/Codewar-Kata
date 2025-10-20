function createSecretHolder(secret){
    let b = secret;
    return {
        setSecret(newSecret = 5){
           b = newSecret
        },
        getSecret(){
          return b  
        }
    }
}
const obj = createSecretHolder(5);
obj.getSecret() // ➜ 5
obj.setSecret(2);
obj.getSecret() // ➜ 2