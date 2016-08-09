/**
 * Created by Alex.W on 2016/8/8.
 */
(function() {
    angular
        .module("doraemonFact")
        .controller("quizCtrl", QuizController);

        QuizController.$inject = ['quizMetrics','dataService'];
        function QuizController(quizMetrics,dataService) {
            var vm = this;
            vm.quizMetrics = quizMetrics;
            vm.dataService = dataService;
            vm.questionAnswered = questionAnswered;
            vm.setActiveQuestion = setActiveQuestion;
            vm.activeQuestion = 0;

            var numQuestionAnswered = 0;

            function setActiveQuestion() {
                var breakOut = false;
                var quizLength = dataService.quizQuestion.length - 1;

                while(!breakOut) {
                    vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;

                    if(dataService.quizQuestion[vm.activeQuestion].selected === null) {
                        breakOut = true;
                    }
                }
            }

            function questionAnswered() {

                var quizLength = dataService.quizQuestion.length;

                if(dataService.quizQuestion[vm.activeQuestion].selected !== null) {
                    numQuestionAnswered ++;

                    if(numQuestionAnswered >= quizLength) {
                        //finalise quiz
                    }
                }
                vm.setActiveQuestion();
            }


        }
})();