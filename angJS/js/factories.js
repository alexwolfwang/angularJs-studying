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
                changeState : changeState
            };

            return quizObj;

            function changeState(state) {
                quizObj.quizActive = state;
            }
        }




})();