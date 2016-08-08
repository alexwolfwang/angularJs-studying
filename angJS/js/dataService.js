/**
 * Created by Alex.W on 2016/8/8.
 */
(function() {
    angular
        .module('doraemonFact')
        .factory('dataService',DataFactory);

    function DataFactory() {
        var dataObj = {
            doraemonData: doraemonData,
            quizQuestion: quizQuestion
        };
        return dataObj;
    }

    var quizQuestion = [
        {
            type: "text",
            text: "what is the name of the first long story of Doraemon?",
            possibilities:[
                {
                    answer: "Nobita at the Birth of Japan"
                },
                {
                    answer: "Nobita Drifts in the Universe"
                },
                {
                    answer: "Nobita's Dinosaur"
                },
                {
                    answer: "Nobita and Galactic Express"
                }
            ]
        },
        {
            type: "text",
            text: "what is the name of the third long story of Doraemon?",
            possibilities:[
                {
                    answer: "Nobita and the Winged Braves"
                },
                {
                    answer: "Nobita and Fantastic Three Musketeers"
                },
                {
                    answer: "Nobita and the Haunts of Evil"
                },
                {
                    answer: "Nobita and Galactic Express"
                }
            ]
        },
        {
            type: "text",
            text: "what is the name of the third long story of Doraemon?",
            possibilities:[
                {
                    answer: "Nobita and the Winged Braves"
                },
                {
                    answer: "Nobita and Fantastic Three Musketeers"
                },
                {
                    answer: "Nobita and the Haunts of Evil"
                },
                {
                    answer: "Nobita and Galactic Express"
                }
            ]
        },
        {
            type: "text",
            text: "what is the name of the third long story of Doraemon?",
            possibilities:[
                {
                    answer: "Nobita and the Winged Braves"
                },
                {
                    answer: "Nobita and Fantastic Three Musketeers"
                },
                {
                    answer: "Nobita and the Haunts of Evil"
                },
                {
                    answer: "Nobita and Galactic Express"
                }
            ]
        },
        {
            type: "text",
            text: "what is the name of the third long story of Doraemon?",
            possibilities:[
                {
                    answer: "Nobita and the Winged Braves"
                },
                {
                    answer: "Nobita and Fantastic Three Musketeers"
                },
                {
                    answer: "Nobita and the Haunts of Evil"
                },
                {
                    answer: "Nobita and Galactic Express"
                }
            ]
        },
        {
            type: "text",
            text: "what is the name of the third long story of Doraemon?",
            possibilities:[
                {
                    answer: "Nobita and the Winged Braves"
                },
                {
                    answer: "Nobita and Fantastic Three Musketeers"
                },
                {
                    answer: "Nobita and the Haunts of Evil"
                },
                {
                    answer: "Nobita and Galactic Express"
                }
            ]
        },
        {
            type: "text",
            text: "what is the name of the third long story of Doraemon?",
            possibilities:[
                {
                    answer: "Nobita and the Winged Braves"
                },
                {
                    answer: "Nobita and Fantastic Three Musketeers"
                },
                {
                    answer: "Nobita and the Haunts of Evil"
                },
                {
                    answer: "Nobita and Galactic Express"
                }
            ]
        },
        {
            type: "text",
            text: "what is the name of the third long story of Doraemon?",
            possibilities:[
                {
                    answer: "Nobita and the Winged Braves"
                },
                {
                    answer: "Nobita and Fantastic Three Musketeers"
                },
                {
                    answer: "Nobita and the Haunts of Evil"
                },
                {
                    answer: "Nobita and Galactic Express"
                }
            ]
        },
        {
            type: "text",
            text: "what is the name of the third long story of Doraemon?",
            possibilities:[
                {
                    answer: "Nobita and the Winged Braves"
                },
                {
                    answer: "Nobita and Fantastic Three Musketeers"
                },
                {
                    answer: "Nobita and the Haunts of Evil"
                },
                {
                    answer: "Nobita and Galactic Express"
                }
            ]
        },
        {
            type: "text",
            text: "what is the name of the third long story of Doraemon?",
            possibilities:[
                {
                    answer: "Nobita and the Winged Braves"
                },
                {
                    answer: "Nobita and Fantastic Three Musketeers"
                },
                {
                    answer: "Nobita and the Haunts of Evil"
                },
                {
                    answer: "Nobita and Galactic Express"
                }
            ]
        }
    ]




    var doraemonData = [
        {
            "Name":"Nobita's Dinosaur",
            "Volume": 1,
            "Public":"1980",
            "img_url": "imgs/c1.jpg",
            "Plot": "Suneo shows everyone but Nobita a fossil of dinosaur claw. Angry," +
            " Nobita claims he will be able to find a living dinosaur. As Doraemon refuses " +
            "to help him, he digs on a hillside, but instead earns punishment from a landlord " +
            "nearby who forces him to unearth a hole in the ground. He finds an egg-shaped stone" +
            " underneath and quickly uses a time wrap to return it to its former form and after " +
            "warming it, the egg hatches to reveal a Futabasaurus, who is subsequently named Piisuke" +
            " by Nobita. Instead of immediately showing it to the others, Nobita waits it grow while" +
            " making a deal with others. As Piisuke grows too large and is in danger of being found" +
            ", Doraemon and Nobita transport him to 100 million years ago in the Late Cretaceous period." +
            " They are attacked by a mysterious assailant who previously tried to make a deal with" +
            " Nobita to sell Piisuke, though they manage to escape. Left with no proof, Nobita instead" +
            " shows them Piisuke through a television monitor, but realizes that he and Doraemon had " +
            "unknowingly transported Piisuke to the North American shore after the time machine was " +
            "attacked by the assailant. They and the others decide to go there, but the time machine " +
            "is overloaded and crashes off."+

            "The group land on the North American shore and find Piisuke, but the time machine is" +
            " broken and must be taken back to Nobita's desk in faraway Japan if they want to go back" +
            " to the present time. As they travel across the land connecting North America and Asia, " +
            "they meet with various dinosaur species who either help or hinder their progress, such as " +
            "Ornithomimosaurus, Apatosaurus, and Tyrannosaurus. At a cliff, they are attacked by a pack " +
            "of Pteranodon who break their bamboocopters. They are saved by several mysterious assailants," +
            " who reveal they are dinosaur hunters working for a fossil collector named Dollmanstein from" +
            " the 24th century. They offer to return them back home in exchange for selling Piisuke. " +
            "Refusing the deal, the group set a lure for the hunters while they escape across a river. " +
            "However, they are eventually spotted and separated with Gian, Suneo, and Shizuka captured by" +
            " the hunters."+

            "Doraemon and Nobita find the hunters' quarter at the downstream where Gian, Suneo, and Shizuka" +
            " are used as baits for a Tyrannosaurus. The hunters demand that they hand over Piisuke in " +
            "exchange for their lives, but the Tyrannosaurus is revealed to be the one they had previously" +
            " used a Momotaro Dango for, thus is tame enough for the group to use in attacking the hunters." +
            " The hunters are subsequently captured and imprisoned by the Future Time Patrols. Piisuke is" +
            " transported to his homeland, the Late Cretaceous Japan while Nobita and his friends go back" +
            " to the present day."
        },
        {
            "Name" : "Nobita and the Haunts of Evil",
            "Volume" : 3,
            "Public" : "1982",
            "img_url": "imgs/c3.jpg"
        },
        {
            "Name" : "Nobita at the Birth of Japan",
            "Volume" : 9,
            "Public" : "1989",
            "img_url": "imgs/c9.jpg"
        },
        {
            "Name" : "Nobita and Fantastic Three Musketeers",
            "Volume" : 14,
            "Public" : "1994",
            "img_url": "imgs/c14.jpg"
        },
        {
            "Name" : "Nobita and Galactic Express",
            "Volume" : 16,
            "Public" : "1996",
            "img_url": "imgs/c16.jpg"
        },
        {
            "Name" : "Nobita Drifts in the Universe",
            "Volume" : 19,
            "Public" : "1999",
            "img_url": "imgs/c19.jpg"
        },
        {
            "Name" : "Nobita and the Winged Braves",
            "Volume" : 21,
            "Public" : "2001",
            "img_url": "imgs/c21.jpg"
        },
        {
            "Name" : "Nobita and the Wind Wizard",
            "Volume" : 23,
            "Public" : "2003",
            "img_url": "imgs/c23.jpg"
        }
    ]
})();