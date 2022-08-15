
npm run deploy
export $(cat contract/neardev/dev-account.env)


near view $CONTRACT_NAME get
near call $CONTRACT_NAME increase '{"num": 100}' --accountId $CONTRACT_NAME
near view $CONTRACT_NAME get
near view $CONTRACT_NAME decrease '{"num": 10}' --accountId $CONTRACT_NAME
near view $CONTRACT_NAME get
near view $CONTRACT_NAME decrease '{"num": 10}' --accountId $CONTRACT_NAME
near view $CONTRACT_NAME get
