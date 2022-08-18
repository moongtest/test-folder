<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
    </head>
    <body>
        <button id="connect-button">connect Metamask</button>
        <script>
            document.getElementById('connect-button').addEventListener('click', event => {
                let account;
                ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
                    account = accounts[0];
                    console.log(account);

                    ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {
                        console.log(result);
                    });
                });
            });
        </script>
    </body>
</html>