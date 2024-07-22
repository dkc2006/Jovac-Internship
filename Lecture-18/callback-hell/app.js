

//approach 1 -> normal

// function step1() {
    // console.log("selecting image");
//     setTimeout(function(){
//         console.log("image selected");
//         return ("image");
//     },4000)
// }

// function step2(image) {
    // console.log("apply filter");
//     setTimeout(function(){
//         console.log(`applied filter to the ${image}`);
//         return ("filtered image");
//     },2000)
// }0



// function step3(filterdImage) {
    // console.log("selecting caption");
//     setTimeout(function(){
//         console.log(`caption added to the ${filteredImage}`);
//         return ("final image");
//     },3000)
// }


// function step4(final) {
    // console.log("uploading your image please wait..."); 
//     setTimeout(function(){
//         console.log(`uploaded your ${final}`);
//     },4000)
// }

// let image = step1();
// let filterdImage = step2(image); 
// let final = step3(filterdImage);
// step4(final);


//approach 2 => 
    function step1(cb) {
        console.log("selecting image");
        setTimeout(function() {
            console.log("image selected");
            cb("selected image");
        }, 4000);
    }
    
    function step2(image, cb) {
        console.log(`applying filter to ${image}`);
        setTimeout(function() {
            console.log('filter applied successfully');
            cb("filtered image");
        }, 2000);
    }
    
    function step3(filteredImage, cb) {
        console.log(`applying caption to ${filteredImage}`);
        setTimeout(function() {
            console.log("caption applied successfully");
            cb("final image");
        }, 3000);
    }
    
    function step4(finalImage) {
        console.log(`uploading the ${finalImage}`);
        setTimeout(function() {
            console.log("image uploaded successfully");
        }, 4000);
    }
    
    step1(function(image) {
        step2(image, function(filteredImage) {
            step3(filteredImage, function(finalImage) {
                step4(finalImage);
            });
        });
    });
    