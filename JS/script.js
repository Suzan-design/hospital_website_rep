$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });

var first_button = document.getElementById("first_button");
var second_button = document.getElementById("second_button");
var third_button = document.getElementById("third_button");
var fourth_button = document.getElementById("fourth_button");
var fifth_button = document.getElementById("fifth_button");
var card_text1 = document.getElementById("card_text1");
var card_text2 = document.getElementById("card_text2");
var card_text3 = document.getElementById("card_text3");
var card_text4 = document.getElementById("card_text4");
var card_text5 = document.getElementById("card_text5");

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


window.onscroll = function () {
    var navbar = document.getElementById("nav");

    if (scrollY > 100) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}

first_button.onclick = function (){
    card_text1.innerHTML = "مرحبا بكم في مستشفى الملك خالد ومركز الأمير سلطان للخدمات الصحية الطبية وهي مؤسسة تعليمية وخدمية في مجال الرعاية الصحية التي تخدم المجتمع السعودي من المواطنين والمقيمين، وذلك من خلال توفير الرعاية الصحية لأفراد المجتمع بأحدث التقنيات الطبية ووفقاً للمعايير الدولية. هدفنا الأساسي هو التفوق في تقديم خدماتنا الطبية للمرضى من كافة فئات المجتمع ، والعمل مع المستشفيات العامة والخاصة الأخرى لتعزيز دولة المملكة العربية السعودية كوجهة معترف بها عالمياً للرعاية الصحية. مهمتنا هي توفيرأفضل رعاية صحية للجميع في مجتمعنا، وهذا يعني خدمة المرضى وأسرهم بأمان ، وخلق أفضل بيئة صحية ممكنة لكل شخص يزور المستشفى.نحن فخورون بالجودة العالية والتميز الذي نقدمه. وسواءً إن كنتم من المرضى أو أخصائيّ الرعاية الصحية أو الطلبة أو الأكاديميين أو الباحثين أو المستثمرين، فإننا نتطلع للترحيب بكم في مستشفى الملك خالد ومركز الأمير سلطان للخدمات الصحية الطبية لتكونوا شركاء رحلتنا نحو النجاح في تطوير خدمات الرعاية الصحية في الخرج والمملكة العربية السعودية." 
}

second_button.onclick = function () {
    card_text2.innerHTML = " بمتابعة مدير عام الشؤون الصحية بمنطقة الرياض الدكتور حسن بن علي الشهراني ، حصل قسم الرعاية المنزلية في مستشفى الملك خالد ومركز الأمير سلطان للخدمات الصحية بالخرج على إعتماد الهيئة السعودية للتخصصات الصحية كمركز تدريبي معتمد لبرنامج دبلوم تمريض الرعاية المنزلية. أوضح ذلك مساعد المدير العام للخدمات العلاجية الدكتور علي بن سليمان الجمعة، وأضاف أن الاعتماد جاء بعد إجراء تقييم شامل من أعضاء اللجنة، وتأكدهم من إتمام معايير الاعتماد، والإلتزام بمتطلبات البرنامج والسياسات ، والإجراءات المتبعة ، والنواحي التشغيلية ، والتدريبية لبدء التدريب فيه لمدة أربع سنوات."
}

third_button.onclick = function () {
    card_text3.innerHTML = "استقبل طوارئ مستشفى الملك خالد ومركز الأمير سلطان للخدمات الصحية بالخرج عضو تجمع الرياض الصحي الأول مقيم في العقد الخامس من العمر وهو يعاني من صعوبة في الكلام والحركة. -ADVERTISEMENT- Ads by  إنقاذ مقيم: وتم إجراء الاسعافات الأولية له بشكل فوري، وعمل الفحوصات الطبية اللازمة؛ ليتبيّن وجود جلطة دماغية. وقام الفريق الطبي بقيادة استشاري الباطنة د. ماجدة عبدالله واخصائي الباطنة د. عبدالرحمن بشير بنقل المريض إلى قسم العناية الحرجة ووضع خطة علاجية لإذابة الجلطات. وجاء ذلك بالتواصل مع مستشفى صحة الافتراضي ، وبعد 24 ساعة من استجابة المريض للخطة العلاجية واستقرار حالته وتجاوزه مرحلة الخطر، تم نقله إلى قسم التنويم العام حتى غادر المستشفى وهو بصحة جيدة -ولله الحمد-."
}

fourth_button.onclick = function () {
    card_text4.innerHTML = "توّج معالي وزير الصحة م. فهد الجلاجل مستشفى الملك خالد بالخرج عضو تجمع الرياض الصحي الأول بجائزة مسار تحسين الرعاية الحرجة، وذلك ضمن حفل جائزة أداء الصحة في نسختها الخامسة لعام 2022 م، ضمن المشاركات التي بلغ عددها أكثر من 650 مشاركة على الصعيدين الوطني والدولي في مساراتها الخمسة، وذلك بحضور الرئيس التنفيذي لتجمع الرياض الصحي الأول د. صالح التميمي، ونائب الرئيس التنفيذي لتطوير النظام الصحي د. أنور العنزي، والمدير التنفيذي لنطاق الخرج الصحي الأستاذ فهد الممخور."
}

fifth_button.onclick = function () {
    card_text5.innerHTML = "حصد مستشفى الملك خالد ومركز الأمير سلطان للخدمات الصحية بمحافظة الخرج، جائزة أفضل مشروع تحسين أداء لمستشفى عام على مستوى المملكة لعام 2019م، وذلك ضمن جوائز برنامج أداء الصحة الذي تنظمه وزارة الصحة. وحقّق مستشفى الملك خالد المركز الأول بعد أن تمكّن من تحقيق تحسّن في الأداء خلال عام 2019، وذلك بعد دراسة خاصة لمشاريع تحسين أداء قدمت من خلال مشروع تحسين أداء في قسم الطوارئ، وكذلك إضافة مشروعي تحسين مختلفين من ذات المستشفى، ويتضمنها تطبيق منهجيات التحسين المعتمدة عالمياً وفق فرق مؤهلة ذات كفاءة عالية في تنفيذ مشاريع التحسين."
}