/**
 * Created by Alex.W on 2016/8/10.
 */
(function() {

    angular.module('doraemonFact')
        .controller('resultCtrl', resultController);

        resultController.$inject = ['quizMetrics','dataService'];

        function resultController(quizMetrics,dataService) {
            var vm = this;
            vm.quizMetrics = quizMetrics;
            vm.dataService = dataService;
            vm.getAnswerClass = getAnswerClass;
            vm. activeQuestion = 0;


            function getAnswerClass(index) {
                if(index === quizMetrics.correctAnswer[vm.activeQuestion]){
                    return "bg-success";
                } else if(index === dataService.quizQuestion[vm.activeQuestion].selected) {
                    return "bg-danger";
                }
            }
        }






})();