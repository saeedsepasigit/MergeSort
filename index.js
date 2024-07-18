function merge(left, right) {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // مقایسه عناصر دو آرایه و اضافه کردن آن‌ها به آرایه مرتب‌شده
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // اضافه کردن عناصر باقی‌مانده
    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// تابع اصلی Merge Sort
function mergeSort(array) {
    // شرط پایان بازگشت
    if (array.length <= 1) {
        return array;
    }

    // تقسیم آرایه به دو بخش
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    // فراخوانی بازگشتی Merge Sort و ادغام نتایج
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

// تست Merge Sort با یک آرایه نمونه
const sampleArray = [38, 27, 43, 3, 9, 82, 10];
console.log("آرایه مرتب‌شده: ", mergeSort(sampleArray));