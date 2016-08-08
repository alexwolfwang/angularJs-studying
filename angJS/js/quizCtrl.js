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


        }
})();