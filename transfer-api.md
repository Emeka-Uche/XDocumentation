---
description: >-
  These are suites of API that allows you move funds from your Squad Wallet to a
  bank Account.
---

# Transfer API

{% hint style="warning" %}
**Authorization** Any request made without the authorization key (secret key) will fail with a **`401`**` ``(Unauthorized)` response code.
{% endhint %}

{% hint style="info" %}
**The authorization key is sent via the request header as Bearer Token Authorization**
{% endhint %}

**Example:**\
Authorizatio&#x6E;**:** Bearer sandbox\_sk\_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f

## Account Lookup

This API allows you lookup/confirm the account name of the recipient you intend to credit. This should be done before initiating the transfer.

## This API allows you confirm Account Name to be transferred to.

<mark style="color:green;">`POST`</mark> `https://sandbox-api-d.squadco.com/payout/account/lookup`

#### Request Body

| Name                                              | Type   | Description                              |
| ------------------------------------------------- | ------ | ---------------------------------------- |
| bank\_code<mark style="color:red;">\*</mark>      | String | Unique NIP code that identifies a bank.  |
| account\_number<mark style="color:red;">\*</mark> | String | Account number you want to transfer to   |

{% tabs %}
{% tab title="200: OK Success" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "account_name": "JENNY SQUAD",
        "account_number": "0123456789"
    }
}
```
{% endtab %}

{% tab title="401: Unauthorized No Authorization" %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endtab %}

{% tab title="403: Forbidden Invalid/Wrong API Keys" %}
```
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endtab %}
{% endtabs %}

## Available Bank Codes



```
Code	Bank_name
000001  	 Sterling Bank 
000002  	 Keystone Bank 
000003  	 FCMB 
000004  	 United Bank for Africa 
000005  	 Diamond Bank 
000006  	 JAIZ Bank 
000007  	 Fidelity Bank 
000008  	 Polaris  Bank 
000009  	 Citi Bank 
000010  	 Ecobank Bank 
000011  	 Unity Bank 
000012  	 StanbicIBTC Bank 
000013  	 GTBank Plc 
000014  	 Access Bank 
000015  	 Zenith Bank Plc 
000016  	 First Bank of Nigeria 
000017  	 Wema Bank 
000018  	 Union Bank 
000019  	 Enterprise Bank 
000020  	 Heritage 
000021  	 Standard Chartered 
000022  	 Suntrust Bank 
000023  	 Providus Bank 
000024  	 Rand Merchant Bank 
000025  	 Titan Trust Bank 
000026  	 Taj Bank 
000027  	 Globus Bank 
000028  	 Central Bank of Nigeria 
000029  	 Lotus Bank 
000031  	 Premium Trust Bank 
000033  	 eNaira 
000034  	 Signature Bank 
000036  	 Optimus Bank 
050002  	 FEWCHORE FINANCE COMPANY LIMITED 
050003  	 SageGrey Finance Limited 
050005  	 AAA Finance 
050006  	 Branch International Financial Services 
050007  	 Tekla Finance Limited 
050009  	 Fast Credit 
050010  	 Fundquest Financial Services Limited 
050012  	 Enco Finance 
050013  	 Dignity Finance 
050013  	 Trinity Financial Services Limited 
400001  	 FSDH Merchant Bank 
060001  	 Coronation Merchant Bank 
060002  	 FBNQUEST Merchant Bank 
060003  	 Nova Merchant Bank 
060004  	 Greenwich Merchant Bank 
070007  	 Omoluabi savings and loans 
090001  	 ASOSavings & Loans 
090005  	 Trustbond Mortgage Bank 
090006  	 SafeTrust 
090107  	 FBN Mortgages Limited 
100024  	 Imperial Homes Mortgage Bank 
100028  	 AG Mortgage Bank 
070009  	 Gateway Mortgage Bank 
070010  	 Abbey Mortgage Bank 
070011  	 Refuge Mortgage Bank 
070012  	 Lagos Building Investment Company 
070013  	 Platinum Mortgage Bank 
070014  	 First Generation Mortgage Bank 
070015  	 Brent Mortgage Bank 
070016  	 Infinity Trust Mortgage Bank 
070019  	 MayFresh Mortgage Bank 
090003  	 Jubilee-Life Mortgage  Bank 
070017  	 Haggai Mortgage Bank Limited 
070021  	 Coop Mortgage Bank 
070023  	 Delta Trust Microfinance Bank 
070024  	 Homebase Mortgage Bank 
070025  	 Akwa Savings & Loans Limited 
070026  	 FHA Mortgage Bank 
090108  	 New Prudential Bank 
070001  	 NPF MicroFinance Bank 
070002  	 Fortis Microfinance Bank 
070006  	 Covenant MFB 
070008  	 Page Financials 
090004  	 Parralex Microfinance bank 
090097  	 Ekondo MFB 
090110  	 VFD MFB 
090111  	 FinaTrust Microfinance Bank 
090112  	 Seed Capital Microfinance Bank 
090114  	 Empire trust MFB 
090115  	 TCF MFB 
090116  	 AMML MFB 
090117  	 Boctrust Microfinance Bank 
090118  	 IBILE Microfinance Bank 
090119  	 Ohafia Microfinance Bank 
090120  	 Wetland Microfinance Bank 
090121  	 Hasal Microfinance Bank 
090122  	 Gowans Microfinance Bank 
090123  	 Verite Microfinance Bank 
090124  	 Xslnce Microfinance Bank 
090125  	 Regent Microfinance Bank 
090126  	 Fidfund Microfinance Bank 
090127  	 BC Kash Microfinance Bank 
090128  	 Ndiorah Microfinance Bank 
090129  	 Money Trust Microfinance Bank 
090130  	 Consumer Microfinance Bank 
090131  	 Allworkers Microfinance Bank 
090132  	 Richway Microfinance Bank 
090133  	 AL-Barakah Microfinance Bank 
090134  	 Accion Microfinance Bank 
090135  	 Personal Trust Microfinance Bank 
090136  	 Microcred Microfinance Bank 
090137  	 PecanTrust Microfinance Bank 
090138  	 Royal Exchange Microfinance Bank 
090139  	 Visa Microfinance Bank 
090140  	 Sagamu Microfinance Bank 
090141  	 Chikum Microfinance Bank 
090142  	 Yes Microfinance Bank 
090143  	 Apeks Microfinance Bank 
090144  	 CIT Microfinance Bank 
090145  	 Fullrange Microfinance Bank 
090146  	 Trident Microfinance Bank 
090147  	 Hackman Microfinance Bank 
090148  	 Bowen Microfinance Bank 
090149  	 IRL Microfinance Bank 
090150  	 Virtue Microfinance Bank 
090151  	 Mutual Trust Microfinance Bank 
090152  	 Nagarta Microfinance Bank 
090153  	 FFS Microfinance Bank 
090154  	 CEMCS Microfinance Bank 
090155  	 Advans La Fayette  Microfinance Bank 
090156  	 e-Barcs Microfinance Bank 
090157  	 Infinity Microfinance Bank 
090158  	 Futo Microfinance Bank 
090159  	 Credit Afrique Microfinance Bank 
090160  	 Addosser Microfinance Bank 
090161  	 Okpoga Microfinance Bank 
090162  	 Stanford Microfinance Bak 
090164  	 First Royal Microfinance Bank 
090165  	 Petra Microfinance Bank 
090166  	 Eso-E Microfinance Bank 
090167  	 Daylight Microfinance Bank 
090168  	 Gashua Microfinance Bank 
090169  	 Alpha Kapital Microfinance Bank 
090171  	 Mainstreet Microfinance Bank 
090172  	 Astrapolaris Microfinance Bank 
090173  	 Reliance Microfinance Bank 
090174  	 Malachy Microfinance Bank 
090175  	 HighStreet Microfinance Bank 
090176  	 Bosak Microfinance Bank 
090177  	 Lapo Microfinance Bank 
090178  	 GreenBank Microfinance Bank 
090179  	 FAST Microfinance Bank 
090180  	 Amju Unique Microfinance Bank 
090186  	 Girei Microfinance Bank 
090188  	 Baines Credit Microfinance Bank 
090189  	 Esan Microfinance Bank 
090190  	 Mutual Benefits Microfinance Bank 
090191  	 KCMB Microfinance Bank 
090192  	 Midland Microfinance Bank 
090193  	 Unical Microfinance Bank 
090194  	 NIRSAL Microfinance Bank 
090195  	 Grooming Microfinance Bank 
090196  	 Pennywise Microfinance Bank 
090197  	 ABU Microfinance Bank 
090198  	 RenMoney Microfinance Bank 
090205  	 New Dawn Microfinance Bank 
090251  	 UNN MFB 
090252  	 Yobe Microfinance Bank 
090254  	 Coalcamp Microfinance Bank 
090258  	 Imo State Microfinance Bank 
090259  	 Alekun Microfinance Bank 
090260  	 Above Only Microfinance Bank 
090261  	 Quickfund Microfinance Bank 
090262  	 Stellas Microfinance Bank 
090263  	 Navy Microfinance Bank 
090264  	 Auchi Microfinance Bank 
090265  	 Lovonus Microfinance Bank 
090266  	 Uniben Microfinance Bank 
090267  	 Kuda Microfinance Bank 
090268  	 Adeyemi College Staff Microfinance Bank 
090269  	 Greenville Microfinance Bank 
090270  	 AB Microfinance Bank 
090271  	 Lavender Microfinance Bank 
090272  	 Olabisi Onabanjo University Microfinance Bank 
090273  	 Emeralds Microfinance Bank 
090274  	 Prestige Microfinance Bank 
090276  	 Trustfund Microfinance Bank 
090277  	 Al-Hayat Microfinance Bank 
090278  	 Glory Microfinance Bank 
090279  	 Ikire Microfinance Bank 
090280  	 Megapraise Microfinance Bank 
090281  	 MintFinex Microfinance Bank 
090282  	 Arise Microfinance Bank 
090283  	 Nnew Women Microfinance Bank 
090285  	 First Option Microfinance Bank 
090286  	 Safe Haven Microfinance Bank 
090287  	 AssetMatrix Microfinance Bank 
090289  	 Pillar Microfinance Bank 
090290  	 FCT Microfinance Bank 
090291  	 Halal Credit Microfinance Bank 
090292  	 Afekhafe Microfinance Bank 
090293  	 Brethren Microfinance Bank 
090294  	 Eagle Flight Microfinance Bank 
090295  	 Omiye Microfinance Bank 
090296  	 Polyunwana Microfinance Bank 
090297  	 Alert Microfinance Bank 
090298  	 FedPoly Nasarawa Microfinance Bank 
090299  	 Kontagora Microfinance Bank 
090303  	 Purplemoney Microfinance Bank 
090304  	 Evangel Microfinance Bank 
090305  	 Sulspap Microfinance Bank 
090307  	 Aramoko Microfinance Bank 
090308  	 Brightway Microfinance Bank 
090310  	 EdFin Microfinance Bank 
090315  	 U & C Microfinance Bank 
090317  	 PatrickGold Microfinance Bank 
090318  	 Federal University Dutse Microfinance Bank 
090320  	 KadPoly Microfinance Bank 
090321  	 MayFair Microfinance Bank 
090322  	 Rephidim Microfinance Bank 
090323  	 Mainland Microfinance Bank 
090324  	 Ikenne Microfinance Bank 
090325  	 Sparkle 
090326  	 Balogun Gambari Microfinance Bank 
090327  	 Trust Microfinance Bank 
090328  	 Eyowo 
090329  	 Neptune Microfinance Bank 
090331  	 UNAAB Microfinance Bank 
090332  	 Evergreen Microfinance Bank 
090333  	 Oche Microfinance Bank 
090337  	 Iyeru Okin Microfinance Bank 
090352  	 Jessefield Microfinance Bank 
090336  	 BIPC Microfinance Bank 
090345  	 OAU Microfinance Bank 
090349  	 Nassarawa Microfinance Bank 
090360  	 CashConnect Microfinance Bank 
090362  	 Molusi Microfinance Bank 
090363  	 Headway Microfinance Bank 
090364  	 Nuture Microfinance Bank 
090365  	 Corestep Microfinance Bank 
090366  	 Firmus Microfinance Bank 
090369  	 Seedvest Microfinance Bank 
090370  	 Ilisan Microfinance Bank 
090372  	 Legend Microfinance Bank 
090373  	 Think Finance Microfinance Bank 
090374  	 Coastline Microfinance Bank 
090376  	 Apple Microfinance Bank 
090377  	 Isaleoyo Microfinance Bank 
090378  	 New Golden Pastures Microfinance Bank 
090385  	 GTI Microfinance Bank 
090386  	 Interland Microfinance Bank 
090389  	 EK-Reliable Microfinance Bank 
090391  	 Davodani Microfinance Bank 
090380  	 Conpro  Microfinance Bank 
090393  	 Bridgeway Microfinance Bank 
090394  	 Amac Microfinance Bank 
090395  	 Borgu  Microfinance Bank 
090396  	 Oscotech Microfinance Bank 
090399  	 Nwannegadi Microfinance Bank 
090398  	 Federal Polytechnic Nekede Microfinance Bank 
090401  	 Shepherd Trust Microfinance Bank 
090403  	 UDA Microfinance Bank 
090404  	 Olowolagba Microfinance Bank 
090405  	 MONIE POINT (Rolez Microfinance Bank)
090406  	 Business Support Microfinance Bank 
090409  	 FCMB BETA 
090408  	 GMB Microfinance Bank 
090410  	 Maritime Microfinance Bank 
090411  	 Giginya Microfinance bank 
090412  	 Preeminent Microfinance Bank 
090444  	 BOI Microfinance Bank 
090448  	 Moyofade Microfinance Bank 
090455  	 Mkobo Microfinance Bank 
090463  	 Rehoboth Microfinance Bank 
090464  	 Unimaid Microfinance Bank 
090468  	 OLOFIN OWENA Microfinance Bank 
090473  	 Assets Microfinance Bank 
090338  	 UniUyo Microfinance Bank 
090466  	 YCT Microfinance Bank 
090467  	 Good Neigbours Microfinance Bank 
090471  	 Oluchukwu Microfinance Bank 
090465  	 Maintrust Microfinance Bank 
090469  	 Aniocha Microfinance bank 
090472  	 Caretaker Microfinance Bank 
090475  	 Giant Stride Microfinance Bank 
090181  	 Balogun Fulani Microfinance Bank 
090474  	 Verdant Microfinance Bank 
090470  	 Changan RTS Microfinance Bank 
090476  	 Anchorage  Microfinance Bank  
090477  	 Light MFB 
090480  	 Cintrust Microfinance Bank 
090482  	 Fedeth Microfinance Bank 
090483  	 Ada Microfinance Bank 
090488  	 Ibu-Aje Microfinance Bank 
090489  	 Alvana Microfinance Bank 
090490  	 Chukwunenye MFB 
090491  	 Nsuk MFB 
090492  	 Oraukwu MFB 
090494  	 Boji MFB 
090495  	 Goodnews Microfinance Bank 
090496  	 Randalpha Microfinance Bank 
090499  	 Pristine Divitis Microfinance Bank 
090502  	 Shalom Microfinance Bank 
090503  	 Projects Microfinance Bank 
090504  	 Zikora Microfinance Bank 
090505  	 Nigerian Prisons Microfinance Bank 
090506  	 Solid Allianze MFB 
090507  	 FIMS MFB 
090513  	 SEAP Microfinance Bank 
090515  	 RIMA Growth Pathway Microfinance Bank 
090469  	 Aniocha Microfinance bank 
090516  	 Numo Microfinance Bank 
090517  	 Uhuru Microfinance Bank 
090518  	 Afemai Microfinance Bank 
090519  	 Iboma Fadama Microfinance Bank 
090523  	 Chase Microfinance Bank 
090524  	 Solidrock microfinance Bank 
090525  	 TripleA Microfinance Bank 
090526  	 Crescent Microfinance Bank 
090527  	 Ojokoro Microfinance Bank 
090528  	 Mgbidi Microfinance Bank 
090529  	 Ampersand Microfinance Bank 
090530  	 Confidence MFB 
090531  	 Aku Microfinance Bank 
090534  	 Polybadan Microfinance Bank 
090536  	 Ikoyi-Osun Microfinance Bank 
090537  	 Lobrem Microfinance Bank 
090538  	 BluePrint Investments Microfinance Bank 
090539  	 Enrich Microfinance Bank 
090540  	 Aztec Microfinance Bank 
090541  	 Excellent Microfinance Bank 
090542  	 Otuo Microfinance Bank 
090543  	 Iwoama Microfinance Bank 
090544  	 Aspire Microfinance Bank 
090545  	 Abulesoro Microfinance Bank 
090546  	 Ijebu-Ife Microfinance Bank 
090547  	 Rockshield Microfinance Bank 
090548  	 Ally Microfinance Bank 
090549  	 KC Microfinance Bank 
090550  	 Green Energy Microfinance Bank 
090551  	 FairMoney Microfinance Bank 
090553  	 Consistent Trust Microfinance Bank 
090554  	 Kayvee Microfinance Bank 
090555  	 BishopGate Microfinance Bank 
090556  	 Egwafin Microfinance Bank 
090557  	 Lifegate Microfinance Bank 
090558  	 Shongom Microfinance Bank 
090559  	 Shield Microfinance Bank 
090560  	 Tanadi Microfinance Bank 
090561  	 Akuchuckwu Microfinance Bank 
090562  	 Cedar Microfinance Bank 
090563  	 Balera Microfinance Bank 
090564  	 Supreme Microfinance Bank 
090565  	 Oke-Aro Oredegbe Microfinance Bank 
090566  	 Okuku Microfinance Bank 
090567  	 Orokam Microfinance Bank 
090568  	 Broadview Microfinance Bank 
090569  	 Qube Microfinance Bank 
090570  	 Iyamoye Microfinance Bank 
090571  	 Ilaro Poly Microfinance Bank 
090572  	 EWT Microfinance Bank 
090573  	 Snow MFB 
090575  	 First Midas Microfinance Bank 
090576  	 Octopus Microfinance Bank 
090579  	 Gbede Microfinance Bank 
090580  	 Otech Microfinance Bank 
090583  	 Stateside Microfinance Bank 
090574  	 GOLDMAN MFB 
090535  	 Nkpolu-Ust MFB 
090578  	 Iwade MFB Ltd 
090587  	 Microbiz MFB 
090588  	 Orisun MFB 
090589  	 Mercury MFB 
090591  	 Gabsyn Microfinance Bank Limited 
090593  	 Tasued Microfinance Bank 
090602  	 Kenechukwu Microfinance Bank 
090950  	 Waya Microfinance Bank 
090598  	 IBA Microfinance Bank 
090584  	 Island Microfinance Bank 
090600  	 Ave Maria Microfinance Bank 
090608  	 Akpo Microfinance Bank 
090609  	 Ummah  Microfinance Bank 
090610  	 Amoye Microfinance Bank 
090612  	 Medef Microfinance Bank 
090532  	 IBOLO Microfinance Bank 
090581  	 Banc Corp MFB 
090614  	 Flourish MFB 
090615  	 Beststar MFB 
090616  	 Rayyan MFB 
090603  	 Macrod MFB 
090634           Cashbridge Microfinance Bank
090620  	 Iyin Ekiti MFB 
090611  	 Creditville MFB 
090623  	 MAB Allianz MFB 
100001  	 FET 
100002  	 Paga 
100003  	 Parkway-ReadyCash 
100004  	 Opay Digital Services LTD 
100005  	 Cellulant 
100006  	 eTranzact 
100007  	 Stanbic IBTC @ease wallet 
100008  	 Ecobank Xpress Account 
100009  	 GTMobile 
100010  	 TeasyMobile 
100011  	 Mkudi 
100012  	 VTNetworks 
100013  	 AccessMobile 
100014  	 FBNMobile 
100036  	 Kegow (Chamsmobile) 
100016  	 FortisMobile 
100017  	 Hedonmark 
100018  	 ZenithMobile 
100019  	 Fidelity Mobile 
100020  	 MoneyBox 
100021  	 Eartholeum 
100022  	 GoMoney 
100023  	 TagPay 
100025  	 Zinternet Nigera Limited 
100026  	 One Finance 
100029  	 Innovectives Kesh 
100030  	 EcoMobile 
100031  	 FCMB Easy Account 
100032  	 Contec Global Infotech Limited (NowNow) 
100033  	 PalmPay Limited 
100034  	 Zenith Eazy Wallet 
100052  	 Access Yello 
100035  	 M36 
100039  	 TitanPaystack 
080002  	 Taj_Pinspay 
100027  	 Intellifin 
110001  	 PayAttitude Online 
110002  	 Flutterwave Technology Solutions Limited 
110003  	 Interswitch Limited 
110004  	 First Apple Limited 
110005  	 3line Card Management Limited 
110006  	 Paystack Payment Limited 
110007  	 Teamapt Limited 
110014  	 Cyberspace Limited 
110015  	 Vas2nets Limited 
110017  	 Crowdforce 
110032  	 Prophius 
090202  	 Accelerex Network Limited 
999999  	 NIP Virtual Bank 
120001  	 9Payment Service Bank 
120002  	 HopePSB 
120003  	 MoMo PSB 
120004  	 SmartCash PSB 
```

### Sample Request

```
{
    "bank_code":"000013",
    "account_number":"0123456789"
}
```

{% hint style="info" %}
Be sure to use a real account number as this service does a live lookup even on the sandbox environment
{% endhint %}

### Sample Response

```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "account_name": "JENNY SQUAD",
        "account_number": "0123456789"
    }
}
```

## Fund Transfer

This API allows you to transfer funds from your Squad Wallet to the account you have looked up.\
Please be informed that we will not be held liable for mistake in transferring to a wrong account or an account that wasn't looked up.\
\
**Transaction Reference:**\
Transaction Reference used to initiate a transfer must be unique per transfer. Kindly ensure that you append your merchant ID to the transaction Reference you are creating. This is compulsory as it will throw an error if you don't append it.\
\
**For instance:**\
\
If my Squad Merchant ID is SBABCKDY and i want to create a transaction ref for my transfer, then I will have something like:\
\
"transaction\_reference":"SBABCKDY\_12345".\


## ERROR CODE

These are the various error codes that you might get on the transfer API and the one you should re-query

200 -- Success: \
400 --- Bad request \
422 --- Unprocessed\
424 --- Timeout/failed --- **Should re-query**\
404 --- Not found\
412 ---- reversed

<mark style="color:green;">`POST`</mark> `https://sandbox-api-d.squadco.com/payout/transfer`

This is for the movement of funds from Squad Dashboard to any bank account

#### Request Body

| Name                                                     | Type   | Description                                                                                                                                                                                                                                 |
| -------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| transaction\_reference<mark style="color:red;">\*</mark> | String | <p>Unique Transaction Reference used to initiate a transfer. <br>Please ensure that you append your merchant ID to the transaction Reference you are creating. This is compulsory as it will throw an error if you don't append it.<br></p> |
| amount<mark style="color:red;">\*</mark>                 | String | Amount to be transferred. Value is in Kobo.                                                                                                                                                                                                 |
| bank\_code<mark style="color:red;">\*</mark>             | String | Unique NIP Code that identifies a bank.                                                                                                                                                                                                     |
| account\_number<mark style="color:red;">\*</mark>        | String | 10-digit NUBAN account number to be transferred to. Must be an account that has been looked up and vetted to be transferred to.                                                                                                             |
| account\_name<mark style="color:red;">\*</mark>          | String | The account name tied to the account number you are transferring to which you have looked up using our look up API.                                                                                                                         |
| currency\_id<mark style="color:red;">\*</mark>           | String | Takes only the value "NGN"                                                                                                                                                                                                                  |
| remark<mark style="color:red;">\*</mark>                 | String | A unique remark that will be sent with the transfer.                                                                                                                                                                                        |

### Sample Request

```postman_json
{
    "remark": "tEST013",
    "bank_code":"000013",
    "currency_id": "NGN",
    "amount": "10000",
    "account_number":"0736196549",
    "transaction_reference": "P7SJ3KM9_samplepayment101",
    "account_name":"WILLIAM UDOUSORO"
}
```

## Sample Response

{% tabs %}
{% tab title="200: OK Success" %}


```json
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "transaction_reference": "P7SJ3KM9_samplepayment101",
        "response_description": "Approved or completed successfully",
        "currency_id": "NGN",
        "amount": "10000",
        "nip_transaction_reference": "110059240530090548383689968929",
        "account_number": "0736196549",
        "account_name": "WILLIAM UDOUSORO",
        "destination_institution_name": "GTBank Plc"
    }
}
```
{% endtab %}

{% tab title="401: Unauthorized No Authorization" %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endtab %}

{% tab title="403: Forbidden Invalid/Wrong API Keys" %}
```
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endtab %}

{% tab title="400: Insufficient balance " %}


```json
{
    "status": 400,
    "success": false,
    "message": "Insufficient balance",
    "data": {}
}
```
{% endtab %}
{% endtabs %}

## Re-query Transfer

This API allows you re-query the status of a transfer made to know if it was successful, failed, reversed or pending.\
\


## This API allows you re-query the status of a transfer

<mark style="color:green;">`POST`</mark> `https://sandbox-api-d.squadco.com/payout/requery`

#### Request Body

| Name                                                     | Type   | Description                                                                                                                                                                                                                             |
| -------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| transaction\_reference<mark style="color:red;">\*</mark> | String | <p>Unique Transaction Reference used to initiate a transfer. <br>Please ensure that you append your merchant ID to the transaction Reference you are creating. This is compulsory as it will throw an error if you don't append it.</p> |

{% tabs %}
{% tab title="200: OK Success" %}


```json
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "transaction_reference": "SBV6TWACBX-Fsdsd",
        "response_description": "Transaction Success",
        "currency_id": "NGN",
        "amount": "9900",
        "nip_transaction_reference": "110059240319135040572176148333",
        "account_number": "0123456789",
        "account_name": "WILLIAM UDOUSORO",
        "destination_institution_name": "GTBank Plc"
    }
}
```
{% endtab %}

{% tab title="401: Unauthorized No Authorization" %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endtab %}

{% tab title="403: Forbidden Wrong/Invalid API Keys" %}
```
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endtab %}
{% endtabs %}

### Sample Request

```postman_json
{
    "transaction_reference": "47484093994949"
}
```

## Get All Transfers

This API Allows you retrieve the details of all transfers you have done from your Squad Wallet using this transfer solution.

## This API gets the details of all transfers you have done from your Squad Wallet&#x20;

<mark style="color:blue;">`GET`</mark> `https://sandbox-api-d.squadco.com/payout/list`

#### Query Parameters

| Name    | Type    | Description                                                                                             |
| ------- | ------- | ------------------------------------------------------------------------------------------------------- |
| page    | Integer | Number of Pages                                                                                         |
| perPage | Integer | Number of records per page                                                                              |
| dir     | String  | Allows you sort the records in either ascending or descending order. It takes the value "ASC" or "DESC" |

{% tabs %}
{% tab title="200: OK Success" %}
```
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": [
        {
            "account_number_credited": "0254896325",
            "amount_debited": "2000",
            "total_amount_debited": "3000",
            "success": true,
            "recipient": "Dummy Dummy",
            "bank_code": "058",
            "transaction_reference": "4d665e98-802d-4cd7-b76c-c77eaba9e394",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "2000",
            "total_amount_debited": "2500",
            "success": true,
            "recipient": "Dummy Dummy",
            "bank_code": "058",
            "transaction_reference": "bbf6ba99-07ae-463d-a8e5-8b11bd5702fa",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "4000",
            "total_amount_debited": "4500",
            "success": true,
            "recipient": "Dummy Dummy",
            "bank_code": "058",
            "transaction_reference": "e344ed1d-dd1a-4e46-b964-66587a4ad4d4",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": false,
            "recipient": "Tee Fifi",
            "bank_code": "058",
            "transaction_reference": "03/13/2023_C15DBPRZ_Q2P8VPL9",
            "transaction_status": "pending",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": false,
            "recipient": "Tee Fifi",
            "bank_code": "058",
            "transaction_reference": "optional-sample-unique-id",
            "transaction_status": "pending",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": true,
            "recipient": "Hay Stack",
            "bank_code": "058",
            "transaction_reference": "e1f14484-b7dc-4528-8d79-d95fa66e8c69",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": true,
            "recipient": "Jenny Squad",
            "bank_code": "058",
            "transaction_reference": "43eb10c0-57d9-42eb-b8a7-4db299c65ced",
            "transaction_status": "success",
            "switch_transaction": null
        }
    ]
}
```
{% endtab %}

{% tab title="401: Unauthorized No Authorization" %}
```
{
    "success": false,
    "message": "",
    "data": {}
}
```
{% endtab %}

{% tab title="403: Forbidden Wrong/Invalid API Keys" %}
```
{
    "success": false,
    "message": "Merchant authentication failed",
    "data": {}
}
```
{% endtab %}
{% endtabs %}

### Sample Response: 200-ok

```json
{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": [
        {
            "account_number_credited": "0254896325",
            "amount_debited": "2000",
            "total_amount_debited": "3000",
            "success": true,
            "recipient": "Dummy Dummy",
            "bank_code": "058",
            "transaction_reference": "4d665e98-802d-4cd7-b76c-c77eaba9e394",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "2000",
            "total_amount_debited": "2500",
            "success": true,
            "recipient": "Dummy Dummy",
            "bank_code": "058",
            "transaction_reference": "bbf6ba99-07ae-463d-a8e5-8b11bd5702fa",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "4000",
            "total_amount_debited": "4500",
            "success": true,
            "recipient": "Dummy Dummy",
            "bank_code": "058",
            "transaction_reference": "e344ed1d-dd1a-4e46-b964-66587a4ad4d4",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": false,
            "recipient": "Tee Fifi",
            "bank_code": "058",
            "transaction_reference": "03/13/2023_C15DBPRZ_Q2P8VPL9",
            "transaction_status": "pending",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": false,
            "recipient": "Tee Fifi",
            "bank_code": "058",
            "transaction_reference": "optional-sample-unique-id",
            "transaction_status": "pending",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": true,
            "recipient": "Hay Stack",
            "bank_code": "058",
            "transaction_reference": "e1f14484-b7dc-4528-8d79-d95fa66e8c69",
            "transaction_status": "success",
            "switch_transaction": null
        },
        {
            "account_number_credited": "0254896325",
            "amount_debited": "300000",
            "total_amount_debited": "300000",
            "success": true,
            "recipient": "Jenny Squad",
            "bank_code": "058",
            "transaction_reference": "43eb10c0-57d9-42eb-b8a7-4db299c65ced",
            "transaction_status": "success",
            "switch_transaction": null
        }
    ]
}
```
