"use strict";(self.webpackChunkpaulohernane_me=self.webpackChunkpaulohernane_me||[]).push([[8344],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>m});var o=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=o.createContext({}),l=function(e){var n=o.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},u=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},p="mdxType",E={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(a),d=t,m=p["".concat(i,".").concat(d)]||p[d]||E[d]||r;return a?o.createElement(m,s(s({ref:n},u),{},{components:a})):o.createElement(m,s({ref:n},u))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,s=new Array(r);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:t,s[1]=c;for(var l=2;l<r;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1067:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>E,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=a(7462),t=(a(7294),a(3905));const r={id:"Quiz-a3-q1",title:"Quiz A3Q1",tags:["ODB","DB"]},s=void 0,c={unversionedId:"databases/exercicies/Quiz-a3-q1",id:"databases/exercicies/Quiz-a3-q1",title:"Quiz A3Q1",description:"Usando seu usu\xe1rio do Oracle Apex () criado anteriormente, mostre todos os comandos usados para executar as solicita\xe7\xf5es abaixo, bem como o resultado de cada comando. Somente ser\xe3o aceitas respostas inseridas pelo Moodle.",source:"@site/my-brain/databases/exercicies/quiz-a3-q1.md",sourceDirName:"databases/exercicies",slug:"/databases/exercicies/Quiz-a3-q1",permalink:"/my-brain/databases/exercicies/Quiz-a3-q1",draft:!1,tags:[{label:"ODB",permalink:"/my-brain/tags/odb"},{label:"DB",permalink:"/my-brain/tags/db"}],version:"current",frontMatter:{id:"Quiz-a3-q1",title:"Quiz A3Q1",tags:["ODB","DB"]},sidebar:"myBrainSidebar",previous:{title:"Quiz A2Q2",permalink:"/my-brain/databases/exercicies/Quiz-a2-q2"},next:{title:"Quiz A4Q1",permalink:"/my-brain/databases/exercicies/Quiz-a4-q1"}},i={},l=[],u={toc:l},p="wrapper";function E(e){let{components:n,...a}=e;return(0,t.kt)(p,(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Usando seu usu\xe1rio do Oracle Apex (",(0,t.kt)("a",{parentName:"p",href:"https://apex.oracle.com/i/index.html"},"https://apex.oracle.com/i/index.html"),") criado anteriormente, mostre todos os comandos usados para executar as solicita\xe7\xf5es abaixo, bem como o resultado de cada comando. Somente ser\xe3o aceitas respostas inseridas pelo Moodle."),(0,t.kt)("p",null,"(a) Crie um Object Type chamado TELEFONE_OBJ_TYPE com os seguintes atributos:\npais CHAR(3), ddd CHAR(2) e numero CHAR(9)."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE OR REPLACE TYPE TELEFONE_OBJ_TYPE AS OBJECT (\n    pais CHAR(3),\n    ddd CHAR(2),\n    numero CHAR(9)\n);\n")),(0,t.kt)("p",null,"(b) Crie um Object Type chamado ENDERECO_OBJ_TYPE com os seguintes atributos:\nrua VARCHAR2(20), numero VARCHAR2(5), complemento VARCHAR2(10), bairro VARCHAR2(20), cidade VARCHAR2(20) e estado CHAR(2)."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE OR REPLACE TYPE ENDERECO_OBJ_TYPE AS OBJECT (\n    rua VARCHAR2(20),\n    numero VARCHAR2(5),\n    complemento VARCHAR2(10),\n    bairro VARCHAR2(20),\n    cidade VARCHAR2(20),\n    estado CHAR(2)\n);\n")),(0,t.kt)("p",null,"(c) Crie um Object Type chamado CONTRIBUINTE_OBJ_TYPE com os seguintes atributos: cpf VARCHAR2(11), nome VARCHAR2(30), nascimento DATE, telefone TELEFONE_OBJ_TYPE e endereco ENDERECO_OBJ_TYPE."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE OR REPLACE TYPE CONTRIBUINTE_OBJ_TYPE AS OBJECT (\n    cpf VARCHAR2(11),\n    nome VARCHAR2(30),\n    nascimento DATE,\n    telefone TELEFONE_OBJ_TYPE,\n    endereco ENDERECO_OBJ_TYPE\n);\n")),(0,t.kt)("p",null,"Aqui temos a composi\xe7\xe3o de objetos, onde um objeto pode ser composto por outros objetos."),(0,t.kt)("p",null,"(d) Use o Object Type CONTRIBUINTE_OBJ_TYPE como molde para criar uma Object Table chamada CONTRIBUINTE_OBJ_TAB."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE CONTRIBUINTE_OBJ_TAB OF CONTRIBUINTE_OBJ_TYPE;\n")),(0,t.kt)("p",null,"(e) Visualize a estrutura da Object Table CONTRIBUINTE_OBJ_TAB."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE CONTRIBUINTE_OBJ_TAB;\n")),(0,t.kt)("p",null,"(f) Usando o m\xe9todo construtor, insira duas linhas (Object Rows) na Object Table CONTRIBUINTE_OBJ_TAB. Use dados fict\xedcios de sua escolha."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-SQL"},"INSERT INTO CONTRIBUINTE_OBJ_TAB\nVALUES (\n    CONTRIBUINTE_OBJ_TYPE(\n        '12345678901',\n        'Jos\xe9',\n        TO_DATE('01/01/2000', 'DD/MM/YYYY'),\n        TELEFONE_OBJ_TYPE(\n            '55',\n            '83',\n            '987654321'\n        ),\n        ENDERECO_OBJ_TYPE(\n            'Rua 1',\n            '123',\n            'Apto 1',\n            'Bairro 1',\n            'Cidade 1',\n            'PB'\n        )\n    )\n);\n\nINSERT INTO CONTRIBUINTE_OBJ_TAB\nVALUES (\n    CONTRIBUINTE_OBJ_TYPE(\n        '98765432101',\n        'Maria',\n        TO_DATE('01/01/2000', 'DD/MM/YYYY'),\n        TELEFONE_OBJ_TYPE(\n            '55',\n            '83',\n            '123456789'\n        ),\n        ENDERECO_OBJ_TYPE(\n            'Rua 2',\n            '321',\n            'Apto 2',\n            'Bairro 2',\n            'Cidade 2',\n            'PB'\n        )\n    )\n);\n")),(0,t.kt)("p",null,"(g) Adicione um m\xe9todo chamado format_phone ao Object Type CONTRIBUINTE_OBJ_TYPE para retornar o n\xfamero de telefone formatado de um determinado objeto. O aluno deve ser capaz de escolher o tipo do m\xe9todo apropriado bem como se o mesmo deve ser implementado como fun\xe7\xe3o ou procedure. O formato esperado de n\xfamero de telefone \xe9 +55 (83) 98754-8276. Quando necess\xe1rio, procure na documenta\xe7\xe3o do Oracle por fun\xe7\xf5es que lidam com dados textuais."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE OR REPLACE TYPE CONTRIBUINTE_OBJ_TYPE AS OBJECT (\n    cpf VARCHAR2(11),\n    nome VARCHAR2(30),\n    nascimento DATE,\n    telefone TELEFONE_OBJ_TYPE,\n    endereco ENDERECO_OBJ_TYPE,\n    MAP MEMBER FUNCTION format_phone RETURN VARCHAR2\n);\n\nCREATE OR REPLACE TYPE BODY CONTRIBUINTE_OBJ_TYPE AS\n    MEMBER FUNCTION format_phone RETURN VARCHAR2 IS\n        formated_phone VARCHAR2(20);\n    BEGIN\n        formated_phone := '+' || self.telefone.pais || ' (' || self.telefone.ddd || ') ' || self.telefone.numero;\n        RETURN formated_phone;\n    END;\nEND;\n")),(0,t.kt)("p",null,"(h) Escreva um comando SELECT sobre a tabela CONTRIBUINTE_OBJ_TAB para chamar o m\xe9todo criado na quest\xe3o anterior e mostrar na tela o n\xfamero do telefone formatado de todos os contribuintes."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT c.format_phone() AS formated_phone\nFROM CONTRIBUINTE_OBJ_TAB c;\n")))}E.isMDXComponent=!0}}]);