    // in this vedio we see star pattern in js

    // 1 Right - Angle Traingle Pattern

    // let n = 5;
    // for(let i =1; i<=n ; i++){
    //     let stars = "";
    //     for(let j =1 ; j<= i ; j++){
    //         stars += "* "
    //     }
    //     console.log(stars)
    // }
     

    //2 Inverted right _Angle Triangle Pattern

    //       let n = 5;
    // for(let i = n ; i >=1 ; i--){
    //     let stars = "";
    //     for(let j =1 ; j<= i ; j++){
    //         stars += "* "
    //     }
    //     console.log(stars)
    // }

    // 3 pyramid Pattern

    let n = 5;

    for ( let i = 1; i <= n; i++){
        let pattern = "";

        for (let j= 1; j<=n-i; j++){
            pattern += " "
        }
        // we create stars
        for(let k=1; k<=i; k++){
            pattern +="* "
       }
       console.log(pattern)
    }
         // thank you for watching guys +_