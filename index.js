/* 


codigo realizado para fins pessoais, no qual
eu me interessei em compartilhar esse conhecimento

nao recomendando para fins profissionais

dev: Matheus Roque de Brito

para rodar o script installe a extensao puppeteer
 */


const puppeteer = require('puppeteer');

//variaveis
const dominio = 'http://192.168.0.1';
/* 
insira o login e senha de seu roteador
localizado possivelmente no adesivo do roteador
caso nao tenha sido alterado
 */
const login = "";
const senha = "";

/*nesse caso tinham duas redes para alterar */
const nomenovaconta = '';
const nomenovaconta2 = '';

/*valor da senha nova */
const novasenha = "clinica2020";


(async () => {

    /*inicia o browser */
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();

  /* vai para o dominio escolhido */
  await page.goto(dominio);
  console.log("entando no "+dominio);


  /* inserindo dados no formulario*/
      /*login*/
  await page.type('input[name="username"]', login);
  console.log("\nlogin inserido");
      /*senha */
  await page.type('input[name="password"]', senha);
  console.log("senha inserida");
  console.log("carregando\n\n");
      /*clicar no botao enter*/
  await page.click('button[class="btn btn-primary"]');
  await page.keyboard.press('Enter'); // Enter Key


  
  

  console.log("login efetuado com sucesso\n\n")

  

  /*pagina inicial primeiro botao ja ativo */
  await page.click("button[class='btn btn-primary active']");
  await page.type('input[name="wifiName"]', nomenovaconta);
  await page.type('input[name="wifiPass"]',novasenha);
  await page.type('input[name="wifiConfirmPass"]',novasenha);
  console.log("nome alterado para "+nomenovaconta);
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
  console.log(nomenovaconta+" atualizado");


    /*clicar no segundo botao */
  await page.click("button[class='btn btn-primary']");
    /*pagina inicial segundo botao  */
  await page.type('input[name="wifiName"]', nomenovaconta2);
  await page.type('input[name="wifiPass"]',novasenha);
  await page.type('input[name="wifiConfirmPass"]',novasenha);
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
  console.log("nome alterado para "+nomenovaconta2);
  console.log(nomenovaconta2+" atualizado");


  /*alteracoes feitas */
  await page.click("li[class='logout-btn']");
  await browser.close();
  /*fechando browser */


  console.log("\nprograma finalizado com sucesso :)\n\n\n");

})()

