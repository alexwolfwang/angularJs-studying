/**
 * Created by Alex.W on 2016/8/10.
 */
(function() {

    angular.module('doraemonFact')
        .controller('resultCtrl', resultController);

        resultController.$inject = ['quizMetrics'];

        function resultController(quizMetrics) {
            var vm = this;
            vm.quizMetrics = quizMetrics;
        }
})();