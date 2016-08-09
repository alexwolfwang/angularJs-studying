/**
 * Created by Alex.W on 2016/8/8.
 */
(function() {
   angular
       .module('doraemonFact')
       .factory('quizMetrics',QuizMetrics);



        function QuizMetrics() {
            var quizObj = {
                quizActive : false,
                resultActive : false,
                changeState : changeState
            };

            return quizObj;

            function changeState(metric,state) {
                if(metric === "quiz") {
                    quizObj.quizActive = state;
                } else if(metric === "results") {
                    quizObj.resultActive = state;
                } else {
                    return false;
                }
            }
        }




})();