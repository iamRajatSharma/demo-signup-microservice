const subscribeToUserCreated = require("./pubSub/subscriber")


async function main(){
    console.log('Email Service Started')
    await subscribeToUserCreated()
}

main()