
        let country_name = "GERMANY";
        let btns = document.querySelectorAll(".btn");
        let select = document.querySelectorAll(".btn")[0];
        //select.style = 'background-color:  green;';
        console.log("running");
        btns.forEach(btn => {
            btn.addEventListener('click', event => {
                select.style = 'none';
                country_name = btn.innerHTML.toUpperCase();
                console.log(country_name);
                select = btn;
                btn.style = 'background-color:  green;';
            });
            
        }); 
        console.log("over");
        // document.querySelectorAll(".btn")[0].reset;
        
        // console.log(selected_country);
        function result() {
            var hr_for_lecture = Number(document.getElementById("dta1").value);
            var hr_for_selfstudy = Number(document.getElementById("dta2").value);
            var weeks_semester = Number(document.getElementById("dta3").value);
            let ectsA = 30, ectsB = 27, ectsC = 28, ectsD = 25;
            let Ects = ectsA;
            
            // console.log(country_name)
            if (country_name == "GERMANY" || country_name == "BELGIUM" || country_name == "ROMANIA" || country_name == "HUNGARY")
                Ects = ectsA;

            else if (country_name == "FINLAND")
                Ects = ectsB;

            else if (country_name == "PORTUGAL" || country_name == "NETHERLANDS")
                Ects = ectsC;

            else if (country_name == "AUSTRIA" || country_name == "ITALY" || country_name == "SPAIN")
                Ects = ectsD;


            console.log(Ects);
            var res = ((hr_for_lecture + hr_for_selfstudy) * weeks_semester) / Ects;
            res = res.toFixed(1);
            document.getElementById("ans").value = res;
            if (res < 1) {
                document.getElementById("ans").value = "Error in Obtained grade";
            }

        }
