function execute(url) {
    var browser = Engine.newBrowser();
    browser.setUserAgent(UserAgent.android());
    var doc = browser.launch(url, 4000);
    browser.close()
        var id = doc.select("#plList > li.plSel > div > div.plLength > div > input[type=checkbox]").attr("data-id");
        let response = fetch("https://truyenaudiocvv.com/api/getText", {
            method: "GET",
            queries: {
                dataType: "json",
                taskId: id
            }
        });
        if (response.ok) {
            let json = response.json();
            var content = json.content
        }
        return Response.success(content.replace("Nguồn Truyện Audio CV chấm com","").replace("<br />.<br />","").replace("<br> Cách Chương.<br>",""));

}
tracks = [{"track":0,"id":102777467,"name":"Ch\u01b0\u01a1ng 2","slug":1,"chapter_number":"K0nM0y3JKNXNSdVNSsyPNzQ3trQ0twAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/cZG7zioj%252FUZRHfDHf5LEhWCO2WBXDi0xhlvcQSa%252FrjBR4PAUh66bJwivB5vm8%252B3MWrW4WFK%252FF4z3ewI2zgKdL0NTiKlh8XqK2SnOD6aGPUWkLoaFsesYpg9zdSOxmsox","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":1,"id":102777468,"name":"Ch\u01b0\u01a1ng 3","slug":2,"chapter_number":"KynVzcnMy9AtS9XNyM_TLckoTSyBiKRn5mfqJmcklsYbmpsYmJpZAAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/cZG7zioj%252FUZRHfDHf5LEhbtaQ1%252F3m8VJ157O1lnN1O9f6Zp%252BahRjcjT28XMWsHGXscWlupKEhbO3RLoInlG3%252BuVneQX%252FcyV%252FdR1xIo%252BapcpcjvHn2yy2Tfh%252BBdzx6rKP","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":2,"id":102777469,"name":"Ch\u01b0\u01a1ng 4","slug":3,"chapter_number":"S0os0c0o1U3JTM3TLc7My9DNBhLxhuYmBqZmlgA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/foLHCkp60LGubxC8ND2PXvd8OvOh7wEg9uE6vg8%252FlqPWcIEI3w8f%252BTEqk94sUKCSL%252FTLFCt%252B3LAPBysb9cw9F8LllSyxnOYOx0Bhx%252F0LuyHapxe1hqizXMbXD6fFQ6ax","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":3,"id":102777470,"name":"Ch\u01b0\u01a1ng 5","slug":4,"chapter_number":"K8nMy9DNTtXNSUzWTc9MjDc0NzEwNTcAAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/MJlHMRTGb4xM%252FBnspHjtkL6IrEaYpUXKDhoyOAM2azBml%252Fp8ECtI%252BzpPrGBInpi7mrFT0OHeFY0BtjnlF2TqqmITrWklCsq%252FkhJaYvK0N9%252Fj4ymVZLndM2TJF3JroGzU","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":4,"id":102777471,"name":"Ch\u01b0\u01a1ng 6","slug":5,"chapter_number":"y0lM1k3PTNQtyUgF4sTceENzEwNTc0MA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/MJlHMRTGb4xM%252FBnspHjtkL6IrEaYpUXKDhoyOAM2azBml%252Fp8ECtI%252BzpPrGBInpi7mrFT0OHeFY0BtjnlF2Tqqs1F569ViAYCRPRJMWckqZYcQhibCRocNaATGnqkUgjH","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":5,"id":102777472,"name":"Ch\u01b0\u01a1ng 7","slug":6,"chapter_number":"q0zN083LKM1P1i0prUwtiTc0NzEwNTcCAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/MJlHMRTGb4xM%252FBnspHjtkL6IrEaYpUXKDhoyOAM2azBml%252Fp8ECtI%252BzpPrGBInpi7mrFT0OHeFY0BtjnlF2Tqqm2Gn%252FTE4537YgJpC9SBnUcOWFGUBR37yGqWMfoujkqj","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":6,"id":102777473,"name":"Ch\u01b0\u01a1ng 8","slug":7,"chapter_number":"y04t0c3IL9DVTc4oTdQtKcqMNzQ3MTA1NwYA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/MJlHMRTGb4xM%252FBnspHjtkL6IrEaYpUXKDhoyOAM2azBml%252Fp8ECtI%252BzpPrGBInpi7mrFT0OHeFY0BtjnlF2TqqumIiSuMYuRWp38%252BWyAb10vXvDw7QY80%252F4QN4rnIB3in","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":7,"id":102777474,"name":"Ch\u01b0\u01a1ng 9","slug":8,"chapter_number":"KynVTcnMy4g3NDcxMDU3AQA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/MJlHMRTGb4xM%252FBnspHjtkL6IrEaYpUXKDhoyOAM2azBml%252Fp8ECtI%252BzpPrGBInpi7mrFT0OHeFY0BtjnlF2TqqsH23%252BXB66l0D4kcgSHc%252BzQds%252FbKogXZLq0Df8OgTa5%252F","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":8,"id":102777475,"name":"Ch\u01b0\u01a1ng 10","slug":9,"chapter_number":"S0pMztDNSy-tTC3RTclPLNHNyM_TzctIzIs3NDcxMDU3BQA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/Mib2pv4uR3d8Nsj1A7SFglEud9OiD5UvnpPEG4ngTClxzu1yUaAhq8GX1hUtzB3gYCsLeTF7VtzpYyzBzvKMlPuVyuthLRcgmjzswYwH3cIcv2poRB1tgWFgYiI5JAjX","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":9,"id":102777476,"name":"Ch\u01b0\u01a1ng 11","slug":10,"chapter_number":"S0pMztAtyczL0K1IjDc0NzEwNTcDAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/cZG7zioj%252FUZRHfDHf5LEhWCO2WBXDi0xhlvcQSa%252FrjBR4PAUh66bJwivB5vm8%252B3MWrW4WFK%252FF4z3ewI2zgKdL7IYm8BieNA%252FQ1otwmrYezyu6m%252F%252BduW0ppD1wADmkTjr","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":10,"id":102777477,"name":"Ch\u01b0\u01a1ng 12","slug":11,"chapter_number":"Sy7NS9fNy0gs1U3OyEzN001JLI03NDcxMDU3BwA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/MJlHMRTGb4xM%252FBnspHjtkL6IrEaYpUXKDhoyOAM2azBml%252Fp8ECtI%252BzpPrGBInpi7mrFT0OHeFY0BtjnlF2TqqvzEbdnDY67ComLFCh3wEAiMDBcEIQLDAytv8Lpp60VA","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":11,"id":102777478,"name":"Ch\u01b0\u01a1ng 13","slug":12,"chapter_number":"S0ks0c1N1U0pTdQtScxLjzc0NzEwNbcAAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/cZG7zioj%252FUZRHfDHf5LEhQoTkqbA8Kwq8R2aZexxRqLug2wXTDtQisEUEsMXBY4g%252FlKucvyiqOviJ2bKWzavnAKxxr69Gc5BE%252BaHkfwONzXwDrFS1Nq%252BAKsX9SZAcQiF","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":12,"id":102777479,"name":"Ch\u01b0\u01a1ng 14","slug":13,"chapter_number":"S8nPS9ctyCiNNzQ3MTA1twQA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/slbsXGxJRCL7Yy%252FAWiZhGuCna4449821%252FqgBm9AS5xVlFXrgBu2WrS%252BqxlMI1QT3w4UE96alUMLGJCecnMjVbxgoqdjIqM1b55BGkfLKO9sAwX29c7IPaeEkuydFK1kr","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":13,"id":102777480,"name":"Ch\u01b0\u01a1ng 15","slug":14,"chapter_number":"y03UzctMzdVNScyLNzQ3MTC1MAAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/MJlHMRTGb4xM%252FBnspHjtkPktcBFibJH1OWjB4rehnhq3cRzHnKJhOOQ702a3SnRXInH9tBOoFX%252FJM4rarle6UZxsvuaCTaqnOesXutz88OA6iM5D6lWeBUrIgfpo6%252BfT","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":14,"id":102777481,"name":"Ch\u01b0\u01a1ng 16","slug":15,"chapter_number":"y8tIzNNNTkzO0E1JzEvXLSkCckuK8vPS4w3NTQxMLQwB","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/cZG7zioj%252FUZRHfDHf5LEhQdwXwr6%252BGVYF4kuh581gPBa7fEvOJU%252FeLGx1AHrV53dFXRuK5qdhTnL%252FxJwSiedYbh%252Bgf1bVu%252BvIkExt4Vxla7R5pkgpzlTlCIh9C1Ch0G3","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":15,"id":102777482,"name":"Ch\u01b0\u01a1ng 17","slug":16,"chapter_number":"S8nUzchP1E1KzEuPNzQ3MTC1MAIA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/cZG7zioj%252FUZRHfDHf5LEhQdwXwr6%252BGVYF4kuh581gPBa7fEvOJU%252FeLGx1AHrV53dFXRuK5qdhTnL%252FxJwSiedYbl8HbtTI4IAM%252BbUx2KPZHX50ccFBKk8BFD%252FWVyjE7d7","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":16,"id":102777483,"name":"Ch\u01b0\u01a1ng 18","slug":17,"chapter_number":"K0nUzchPzEuPNzQ3MTC1MAYA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/cZG7zioj%252FUZRHfDHf5LEhQdwXwr6%252BGVYF4kuh581gPBa7fEvOJU%252FeLGx1AHrV53dFXRuK5qdhTnL%252FxJwSiedYcBzQf1PNm58Yy4AHh2pyzZo%252FM%252BJfYcqkjJ5fnUkyBBj","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":17,"id":102777484,"name":"Ch\u01b0\u01a1ng 19","slug":18,"chapter_number":"y0tPLNHNSazUzUjM1E3JT9TNzkwt1c3IT4w3NDcxMLUwAQA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/cZG7zioj%252FUZRHfDHf5LEhQdwXwr6%252BGVYF4kuh581gPBa7fEvOJU%252FeLGx1AHrV53dFXRuK5qdhTnL%252FxJwSiedYaUT1f8s3kpFzUCoFxuvd4%252FIgMNIqzngvTSBqiDof7Ho","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":18,"id":102777485,"name":"Ch\u01b0\u01a1ng 20","slug":19,"chapter_number":"S8lMzdVNz0yMNzQ3MTC1MAUA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/Mib2pv4uR3d8Nsj1A7SFguByL%252Fb7wiRfUvD0bxCaPDY%252FhTjZ%252BD7LG%252BcNWv7NamvR%252FI0XCPMAedfsPcu0MvCdqHafOpFVDT0Cy89NQA5LhcPn7ENRluEm6pPHmarvH%252BYj","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":19,"id":102777486,"name":"Ch\u01b0\u01a1ng 21","slug":20,"chapter_number":"S8lMzdUtSczVTcnMy4g3NDcxMLUwAwA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/cZG7zioj%252FUZRHfDHf5LEhbtaQ1%252F3m8VJ157O1lnN1O9f6Zp%252BahRjcjT28XMWsHGXscWlupKEhbO3RLoInlG3%252Bj4DGYaCdMzlsag7ZdbsyK2feMDSebqD%252FQwcL4EjXhWy","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":20,"id":102777487,"name":"Ch\u01b0\u01a1ng 22","slug":21,"chapter_number":"K8rP1E3JjDc0NzEwtTAHAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/cZG7zioj%252FUZRHfDHf5LEhQoTkqbA8Kwq8R2aZexxRqLug2wXTDtQisEUEsMXBY4g%252FlKucvyiqOviJ2bKWzavnGe%252Ff8EhuOl5wRJKxkG%252FJ07MehzjB4DSRvgtf8ucQ2uW","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":21,"id":102777488,"name":"Ch\u01b0\u01a1ng 23","slug":22,"chapter_number":"S8lMLdEtychMzdMtScyMNzQ3MTC1sAAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/cZG7zioj%252FUZRHfDHf5LEhQdwXwr6%252BGVYF4kuh581gPBa7fEvOJU%252FeLGx1AHrV53dFXRuK5qdhTnL%252FxJwSiedYQLdaqHYUnhl3DwSEFec0DZ2OybNY7%252F2SX3%252FHH9M5fyE","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":22,"id":102777489,"name":"Ch\u01b0\u01a1ng 24","slug":23,"chapter_number":"y0jVLcnIz0vXLUkEEsmJBfGG5iYGphaWAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/foLHCkp60LGubxC8ND2PXqJE6XDXYY6aRmPnTUQH667XbxxIbHq5PUo0RW63XxoYeRwEiK7mPzzf0ad%252Biplu%252FxOEQP1kwpbyz3Idp5u3I2Jam%252B%252Fk3RWnzMZsNxx8fNd5","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":23,"id":102777490,"name":"Ch\u01b0\u01a1ng 25","slug":24,"chapter_number":"S0nUTUrM101OTI43NDcxMLU0AAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/ZInB3iZe%252BAv%252BG6fGZqNHiSNInpX8FBjxWAOgwtd3MnoUY9YLPe89PtvtA1lIdXAkLpZhQEsYmkgB5zyyeNTMpMMzLQQ7I6%252F4nZvOL2sbznRuQ5vmIau1BVMk%252FSjp62ZN","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":24,"id":102777491,"name":"Ch\u01b0\u01a1ng 26","slug":25,"chapter_number":"K8nXzU3M1E0uTdQtykzNS9dNzkjMS483NDcxMLU0BAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/5rQ1h0ETFlnC167kuEnzjZO881Fr7SR0y%252BIfr78BnqQv7t%252FSx99j2wD1mxWZK%252B4a4ytiJldA%252F%252BedEAYtCa%252FaDow8VGmJTLBoZBrhMVjs4f7oroB8eBR7VOZAODsUsNZj","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":25,"id":102777492,"name":"Ch\u01b0\u01a1ng 27","slug":26,"chapter_number":"y83UTczL0C3JTC3VTUnM103Kjzc0NzEwtTQCAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/5rQ1h0ETFlnC167kuEnzjZO881Fr7SR0y%252BIfr78BnqQv7t%252FSx99j2wD1mxWZK%252B4a4ytiJldA%252F%252BedEAYtCa%252FaDpDC3PYoI1MPT%252BLswyCCY7HgXN0CnfRaQnBgeGD%252BOrtQ","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":26,"id":102777493,"name":"Ch\u01b0\u01a1ng 28","slug":27,"chapter_number":"y04t0U3PTMzXTUrMS9fNKC2NNzQ3MTC1NAYA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/5rQ1h0ETFlnC167kuEnzjZO881Fr7SR0y%252BIfr78BnqQv7t%252FSx99j2wD1mxWZK%252B4a4ytiJldA%252F%252BedEAYtCa%252FaDhIE%252Flf2WjzK%252FVT8aLIOTW5lWsZ3E%252FTypekco2GstYVO","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":27,"id":102777494,"name":"Ch\u01b0\u01a1ng 29","slug":28,"chapter_number":"S0ks1S3JAOKi0vy89HhDcxMDU0sTAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/a65AZmkDjJvHhAa28z4JmpYrTTR%252F4GKmGa7NHW6Vxgs255Es2Qf5mge76DJNhee9tNXNsdw32QUgJuhePy60EN3WsP6tsfV80weAEIEzIlKgE5MQf7oOffvtD6f6Z7kP","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":28,"id":102777495,"name":"Ch\u01b0\u01a1ng 30","slug":29,"chapter_number":"y0vPyEzN000tiDc0NzEwtTQFAA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/5kYHhhRt1CHq4Sy10SA%252BeaYcw8YR60eiZ1ZvUlKf7K4OrxNEh09ZoP34650qNfPBD7XGX0y%252BFqvc1awgn4%252BjfNFtGDo22qy5qChBAQJaoCPygzTuooRZLJBWWXImuF3D","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1},{"track":29,"id":102777496,"name":"Ch\u01b0\u01a1ng 31","slug":30,"chapter_number":"K8lI1S0p1U1K1E1JzI83NDcxMLU0AwA","availableVoice":"3","file":[["","","","https:\/\/truyenaudiocvv.com\/m\/foLHCkp60LGubxC8ND2PXvd8OvOh7wEg9uE6vg8%252FlqPWcIEI3w8f%252BTEqk94sUKCSL%252FTLFCt%252B3LAPBysb9cw9FygFhgu0Nv4O2ovmNZG%252BTTp38PCQBUcCLfVOYjMlEtI%252F","","",""],["","","","","","",""],["","","","","","",""]],"speed":1,"isFree":1}],
                