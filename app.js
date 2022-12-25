"use strict";
exports.__esModule = true;
var config = {
    url: "https://api.recursionist.io/builder/computers?type=",
    inputForm: document.getElementById("computer-parts"),
    result: document.getElementById("result")
};
var PC = /** @class */ (function () {
    function PC() {
        this.cpuBrand = "";
        this.cpuModel = "";
        this.gpuBrand = "";
        this.gpuModel = "";
        this.ramBrand = "";
        this.ramModel = "";
        this.storageType = "";
        this.storageVolume = "";
        this.storageBrand = "";
        this.storageModel = "";
        this.cpuScore = 0;
        this.gpuScore = 0;
        this.ramScore = 0;
        this.storageScore = 0;
        this.numberOfMade = 0;
    }
    PC.prototype.canMakePC = function () {
        return this.cpuModel !== "-" && this.gpuModel !== "-" && this.ramModel !== "-" && this.storageModel !== "-";
    };
    PC.prototype.getCpuBrand = function () {
        return this.cpuBrand;
    };
    PC.prototype.getCpuModel = function () {
        return this.cpuModel;
    };
    PC.prototype.getGpuBrand = function () {
        return this.gpuBrand;
    };
    PC.prototype.getGpuModel = function () {
        return this.gpuModel;
    };
    PC.prototype.getRamBrand = function () {
        return this.ramBrand;
    };
    PC.prototype.getRamModel = function () {
        return this.ramModel;
    };
    PC.prototype.getStorageType = function () {
        return this.storageType;
    };
    PC.prototype.getStorageBrand = function () {
        return this.storageBrand;
    };
    PC.prototype.getStorageVolume = function () {
        return this.storageVolume;
    };
    PC.prototype.getStorageModel = function () {
        return this.storageModel;
    };
    PC.prototype.setCpuBrand = function (cpuBrand) {
        this.cpuBrand = cpuBrand;
    };
    PC.prototype.setCpuModel = function (cpuModel) {
        this.cpuModel = cpuModel;
    };
    PC.prototype.setGpuBrand = function (gpuBrand) {
        this.gpuBrand = gpuBrand;
    };
    PC.prototype.setGpuModel = function (gpuModel) {
        this.gpuModel = gpuModel;
    };
    PC.prototype.setRamBrand = function (ramBrand) {
        this.ramBrand = ramBrand;
    };
    PC.prototype.setRamModel = function (ramModel) {
        this.ramModel = ramModel;
    };
    PC.prototype.setStorageType = function (storageType) {
        this.storageType = storageType;
    };
    PC.prototype.setStorageVolume = function (storageVolume) {
        this.storageVolume = storageVolume;
    };
    PC.prototype.setStorageBrand = function (storageBrand) {
        this.storageBrand = storageBrand;
    };
    PC.prototype.setStorageModel = function (storageModel) {
        this.storageModel = storageModel;
    };
    PC.prototype.setCpuScore = function (cpuScore) {
        this.cpuScore = cpuScore;
    };
    PC.prototype.setGpuScore = function (gpuScore) {
        this.gpuScore = gpuScore;
    };
    PC.prototype.setRamScore = function (ramScore) {
        this.ramScore = ramScore;
    };
    PC.prototype.setStorageScore = function (storageScore) {
        this.storageScore = storageScore;
    };
    PC.prototype.calcScoreForGaming = function () {
        return Math.floor(this.cpuScore * 0.25 + this.gpuScore * 0.6 + this.ramScore * 0.125 + this.storageScore * 0.025);
    };
    PC.prototype.calcScoreForWorking = function () {
        return Math.floor(this.cpuScore * 0.6 + this.gpuScore * 0.25 + this.ramScore * 0.1 + this.storageScore * 0.05);
    };
    PC.prototype.tryToMakePC = function () {
        var currentCpuBrandElement = document.querySelectorAll(".cpu-brand")[0];
        this.setCpuBrand((currentCpuBrandElement.value));
        var currentCpuModelElement = document.querySelectorAll(".cpu-model")[0];
        this.setCpuModel(currentCpuModelElement.value);
        var currentGpuBrandElement = document.querySelectorAll(".gpu-brand")[0];
        this.setGpuBrand(currentGpuBrandElement.value);
        var currentGpuModelElement = document.querySelectorAll(".gpu-model")[0];
        this.setGpuModel(currentGpuModelElement.value);
        var currentRamBrandElement = document.querySelectorAll(".ram-brand")[0];
        this.setRamBrand(currentRamBrandElement.value);
        var currentRamModelElement = document.querySelectorAll(".ram-model")[0];
        this.setRamModel(currentRamModelElement.value);
        var currentStorageTypeElement = document.querySelectorAll(".storage-type")[0];
        this.setStorageType(currentStorageTypeElement.value);
        var currentStorageVolumeElement = document.querySelectorAll(".storage-volume")[0];
        this.setStorageVolume(currentStorageVolumeElement.value);
        var currentStorageBrandElement = document.querySelectorAll(".storage-brand")[0];
        this.setStorageBrand(currentStorageBrandElement.value);
        var currentStorageModelElement = document.querySelectorAll(".storage-model")[0];
        this.setStorageModel(currentStorageModelElement.value);
    };
    PC.prototype.getNumberOfMade = function () {
        return this.numberOfMade;
    };
    PC.prototype.addNumberOfMade = function () {
        this.numberOfMade++;
    };
    return PC;
}());
var Model = /** @class */ (function () {
    function Model() {
    }
    Model.searchRamNumberList = function (jsonData) {
        var ramNumberList = Array.from(new Set(jsonData.map(function (item) {
            var ramnumber = item.Model.substring(item.Model.lastIndexOf(" "), item.Model.lastIndexOf("x"));
            return ramnumber;
        })));
        return ramNumberList;
    };
    //要改善
    Model.searchVolumeList = function (jsonData) {
        var TBList = [];
        for (var _i = 0, jsonData_1 = jsonData; _i < jsonData_1.length; _i++) {
            var item = jsonData_1[_i];
            for (var _a = 0, _b = item.Model.split(" "); _a < _b.length; _a++) {
                var elem = _b[_a];
                if (elem.indexOf("TB") !== -1)
                    TBList.push(elem);
            }
        }
        var GBList = [];
        for (var _c = 0, jsonData_2 = jsonData; _c < jsonData_2.length; _c++) {
            var item = jsonData_2[_c];
            for (var _d = 0, _e = item.Model.split(" "); _d < _e.length; _d++) {
                var elem = _e[_d];
                if (elem.indexOf("GB") !== -1)
                    GBList.push(elem);
            }
        }
        var volumeList = Array.from(new Set(TBList)).concat(Array.from(new Set(GBList)).sort());
        return volumeList;
    };
    //CPU GPU
    Model.searchBrandList = function (jsonData) {
        var brandList = Array.from(new Set(jsonData.map(function (item) { return item.Brand; }))).sort();
        return brandList;
    };
    Model.searchRamBrandList = function (jsonData, selectedNumber) {
        var brandList = [];
        for (var _i = 0, jsonData_3 = jsonData; _i < jsonData_3.length; _i++) {
            var item = jsonData_3[_i];
            var num = item.Model.substring(item.Model.lastIndexOf(" ") + 1, item.Model.lastIndexOf("x"));
            if (num === selectedNumber)
                brandList.push(item.Brand);
        }
        return Array.from(new Set(brandList)).sort();
    };
    Model.searchStorageBrandList = function (jsonData, selectedVolume) {
        var brandList = Array.from(new Set(jsonData.filter(function (item) { return item.Model.indexOf(selectedVolume) !== -1; }).map(function (item) { return item.Brand; }))).sort();
        return brandList;
    };
    Model.searchModelList = function (jsonData, selectedBrand) {
        var modelList = Array.from(new Set(jsonData.filter(function (item) { return item.Brand === selectedBrand; }).map(function (item) { return item.Model; }))).sort();
        return modelList;
    };
    Model.searchRamModelList = function (jsonData, selectedNumber, selectedBrand) {
        var modelList = [];
        for (var _i = 0, jsonData_4 = jsonData; _i < jsonData_4.length; _i++) {
            var item = jsonData_4[_i];
            var num = item.Model.substring(item.Model.lastIndexOf(" ") + 1, item.Model.lastIndexOf("x"));
            if (num === selectedNumber && item.Brand === selectedBrand)
                modelList.push(item.Model);
        }
        return Array.from(new Set(modelList)).sort();
    };
    Model.searchStorageModelList = function (jsonData, selectedType, selectedVolume, selectedBrand) {
        var modelList = [];
        for (var _i = 0, jsonData_5 = jsonData; _i < jsonData_5.length; _i++) {
            var item = jsonData_5[_i];
            if (item.Type === selectedType.toUpperCase() && item.Model.indexOf(selectedVolume) !== -1 && item.Brand === selectedBrand)
                modelList.push(item.Model);
        }
        return Array.from(new Set(modelList)).sort();
    };
    Model.searchBenchMarkScore = function (jsonData, selectedModel) {
        var benchMarkScore = jsonData.filter(function (item) { return item.Model === selectedModel; }).map(function (item) { return item.Benchmark; })[0];
        return benchMarkScore;
    };
    return Model;
}());
var Controller = /** @class */ (function () {
    function Controller() {
    }
    //ControllerでfetchAPIを制御
    Controller.fetchRamNumbers = function (pc) {
        fetch(config.url + "ram")
            .then(function (response) { return response.json(); })
            .then(function (jsonData) {
            var ramNumberList = Model.searchRamNumberList(jsonData).sort();
            View.resetList("ram", ["number", "brand", "model"]);
            View.appendList(ramNumberList, "ram", "number");
            document.querySelectorAll(".ram-number")[0].addEventListener("change", function (event) {
                if (!(event.currentTarget instanceof HTMLSelectElement)) {
                    return;
                }
                View.resetList("ram", ["brand", "model"]);
                Controller.fetchRamBrands(pc, event.currentTarget.value);
            });
        });
    };
    Controller.fetchStorageVolume = function (pc) {
        document.querySelectorAll(".storage-type")[0].addEventListener("change", function (event) {
            if (!(event.currentTarget instanceof HTMLSelectElement)) {
                return;
            }
            View.resetList("storage", ["volume", "brand", "model"]);
            var selectedType = event.currentTarget.value.toLowerCase();
            fetch(config.url + selectedType)
                .then(function (response) { return response.json(); })
                //なぜか1回目はここで失敗する
                .then(function (jsonData) {
                var volumeList = Model.searchVolumeList(jsonData);
                View.resetList("storage", ["brand", "model"]);
                View.appendList(volumeList, "storage", "volume");
                document.querySelectorAll(".storage-volume")[0].addEventListener("change", function (event) {
                    if (!(event.currentTarget instanceof HTMLSelectElement)) {
                        return;
                    }
                    View.resetList("storage", ["brand", "model"]);
                    selectedType = selectedType.toLowerCase();
                    Controller.fetchStorageBrands(pc, event.currentTarget.value);
                });
            });
        });
    };
    Controller.fetchCPUBrands = function (pc) {
        fetch(config.url + "cpu")
            .then(function (response) { return response.json(); })
            .then(function (jsonData) {
            var brands = Model.searchBrandList(jsonData);
            //Viewクラスのメソッドを使用してbrandsをタブに追加
            View.appendList(brands, "cpu", "brand");
            document.querySelectorAll(".cpu-brand")[0].addEventListener("change", function (event) {
                if (!(event.currentTarget instanceof HTMLSelectElement)) {
                    return;
                }
                View.resetList("cpu", ["model"]);
                Controller.fetchModels(pc, "cpu", event.currentTarget.value);
            });
        });
    };
    //たまたまCPUと入力項目が共通しているだけだと判断し、あえてfetchCPUBrandsとは別の関数として設計
    Controller.fetchGPUBrands = function (pc) {
        fetch(config.url + "gpu")
            .then(function (response) { return response.json(); })
            .then(function (jsonData) {
            var brands = Model.searchBrandList(jsonData);
            //Viewクラスのメソッドを使用してbrandsをタブに追加
            View.appendList(brands, "gpu", "brand");
            document.querySelectorAll(".gpu-brand")[0].addEventListener("change", function (event) {
                if (!(event.currentTarget instanceof HTMLSelectElement)) {
                    return;
                }
                View.resetList("gpu", ["model"]);
                Controller.fetchModels(pc, "gpu", event.currentTarget.value);
            });
        });
    };
    Controller.fetchRamBrands = function (pc, selectedNumber) {
        fetch(config.url + "ram")
            .then(function (response) { return response.json(); })
            .then(function (jsonData) {
            var brands = Model.searchRamBrandList(jsonData, selectedNumber);
            View.resetList("ram", ["brand", "model"]);
            View.appendList(brands, "ram", "brand");
            document.querySelectorAll(".ram-brand")[0].addEventListener("change", function (event) {
                if (!(event.currentTarget instanceof HTMLSelectElement)) {
                    return;
                }
                View.resetList("ram", ["model"]);
                var currentElement = document.querySelectorAll(".ram-number")[0];
                var currentNumber = currentElement.value;
                console.log(currentNumber); //ここが2回判定される currentnumberで応急処置
                Controller.fetchRamModels(pc, currentNumber, event.currentTarget.value);
            });
        });
    };
    Controller.fetchStorageBrands = function (pc, selectedVolume) {
        var storageTypeElement = document.querySelectorAll(".storage-type")[0];
        var storageType = storageTypeElement.value.toLowerCase();
        fetch(config.url + storageType)
            .then(function (response) { return response.json(); })
            .then(function (jsonData) {
            var brands = Model.searchStorageBrandList(jsonData, selectedVolume);
            console.log("type : " + storageType + "brands" + brands);
            View.resetList("storage", ["brand", "model"]);
            View.appendList(brands, "storage", "brand");
            document.querySelectorAll(".storage-brand")[0].addEventListener("change", function (event) {
                if (!(event.currentTarget instanceof HTMLSelectElement)) {
                    return;
                }
                Controller.fetchStorageModels(pc, event.currentTarget.value);
            });
        });
    };
    Controller.fetchModels = function (pc, parts, selectedBrand) {
        fetch(config.url + parts)
            .then(function (response) { return response.json(); })
            .then(function (jsonData) {
            var models = Model.searchModelList(jsonData, selectedBrand);
            View.appendList(models, parts, "model");
            document.querySelectorAll(".".concat(parts, "-model"))[0].addEventListener("change", function (event) {
                if (!(event.currentTarget instanceof HTMLSelectElement)) {
                    return;
                }
                Controller.fetchBeanchMarkScore(pc, parts, event.currentTarget.value);
            });
        });
    };
    Controller.fetchRamModels = function (pc, selectedNumber, selectedBrand) {
        fetch(config.url + "ram")
            .then(function (response) { return response.json(); })
            .then(function (jsonData) {
            var models = Model.searchRamModelList(jsonData, selectedNumber, selectedBrand);
            View.resetList("ram", ["model"]);
            View.appendList(models, "ram", "model");
            document.querySelectorAll(".ram-model")[0].addEventListener("change", function (event) {
                if (!(event.currentTarget instanceof HTMLSelectElement)) {
                    return;
                }
                Controller.fetchBeanchMarkScore(pc, "ram", event.currentTarget.value);
            });
        });
    };
    Controller.fetchStorageModels = function (pc, selectedBrand) {
        var selectedTypeElement = document.querySelectorAll(".storage-type")[0];
        var selectedType = selectedTypeElement.value.toLowerCase();
        fetch(config.url + selectedType)
            .then(function (response) { return response.json(); })
            .then(function (jsonData) {
            console.log("type:" + selectedType);
            var selectedVolumeElement = document.querySelectorAll(".storage-volume")[0];
            var selectedVolume = selectedVolumeElement.value;
            var models = Model.searchStorageModelList(jsonData, selectedType, selectedVolume, selectedBrand);
            View.resetList("storage", ["model"]);
            View.appendList(models, "storage", "model");
            document.querySelectorAll(".storage-model")[0].addEventListener("change", function (event) {
                if (!(event.currentTarget instanceof HTMLSelectElement)) {
                    return;
                }
                Controller.fetchBeanchMarkScore(pc, selectedType, event.currentTarget.value);
            });
        });
    };
    Controller.fetchBeanchMarkScore = function (pc, parts, selectedModel) {
        fetch(config.url + parts)
            .then(function (response) { return response.json(); })
            .then(function (jsonData) {
            var score = Model.searchBenchMarkScore(jsonData, selectedModel);
            if (parts === "cpu")
                pc.setCpuScore(score);
            else if (parts === "gpu")
                pc.setGpuScore(score);
            else if (parts === "ram")
                pc.setRamScore(score);
            else if (parts === "hdd")
                pc.setStorageScore(score);
            else
                pc.setStorageScore(score); //ssd
        });
    };
    //Controllerはmain関数だけpublic
    Controller.main = function () {
        View.drawInitialScreen();
        //作成したpcの情報は画面に出ていれば良い
        //PCクラスに保持する必要はない
        var pc = new PC();
        Controller.fetchCPUBrands(pc);
        Controller.fetchGPUBrands(pc);
        Controller.fetchRamNumbers(pc);
        Controller.fetchStorageVolume(pc);
        document.querySelectorAll(".build-pc")[0].addEventListener("click", function () {
            //一旦null？
            pc.tryToMakePC();
            if (pc.canMakePC()) {
                pc.addNumberOfMade();
                View.DrawMadePC(pc);
            }
            else {
                alert("To build pc, all forms have to be filled out");
            }
        });
    };
    return Controller;
}());
var View = /** @class */ (function () {
    function View() {
    }
    View.drawInitialScreen = function () {
        var container = document.createElement("div");
        container.innerHTML = "\n        <div>\n            <h3>step1: Select Your CPU</h3>\n        </div>\n        <div class=\"d-flex my-2\">\n            <h4>Brand</h4>\n            <select class=\"form-select m-1 cpu-brand w-25\" id=\"cpu-brand\">\n                <option>-</option>\n            </select>            \n            <h4>Model</h4>\n            <select class=\"form-select m-1 cpu-model w-25\">\n                <option>-</option>\n            </select>\n        </div>\n        <div>\n            <h3>step2: Select Your GPU</h3>\n        </div>\n        <div class=\"d-flex my-2\">\n            <h4>Brand</h4>\n            <select class=\"form-select m-1 gpu-brand w-25\">\n                <option>-</option>\n            </select>            \n            <h4>Model</h4>\n            <select class=\"form-select m-1 gpu-model w-25\">\n                <option>-</option>\n            </select>\n        </div>\n        <div>\n            <h3>step3: Select Your Memory Card</h3>\n        </div>\n        <div class=\"d-flex my-2\">\n            <h4>How many?</h4>\n            <select class=\"form-select m-1 ram-number w-25\">\n                <option>-</option>\n            </select>  \n            <h4>Brand</h4>\n            <select class=\"form-select m-1 ram-brand w-25\">\n                <option>-</option>\n            </select>            \n            <h4>Model</h4>\n            <select class=\"form-select m-1 ram-model w-25\">\n                <option>-</option>\n            </select>\n        </div>\n        <div>\n            <h3>step4: Select Your Storage</h3>\n        </div>\n        <div class=\"d-flex my-2\">\n            <h4>HDD or SSD</h4>\n            <!--HDD\u304BSSD\u306E\u4E8C\u629E\u3067\u3042\u308B\u3053\u3068\u306F\u56FA\u5B9A\u306A\u306E\u3067\u3001\u30CF\u30FC\u30C9\u30B3\u30FC\u30C9\u3067\u5BFE\u51E6-->\n            <select class=\"form-select m-1 storage-type w-25\">\n                <option>-</option>\n                <option>HDD</option>\n                <option>SSD</option>\n            </select>\n            <h4>Storage</h4>\n            <select class=\"form-select m-1 storage-volume w-25\">\n                <option>-</option>\n            </select>  \n            <h4>Brand</h4>\n            <select class=\"form-select m-1 storage-brand w-25\">\n                <option>-</option>\n            </select>            \n            <h4>Model</h4>\n            <select class=\"form-select m-1 storage-model w-25\">\n                <option>-</option>\n            </select>\n        </div>\n        <button type=\"button\" class=\"btn btn-primary my-2 build-pc\">Add PC</button>\n        ";
        config.inputForm.append(container);
    };
    View.appendList = function (items, parts, detailInfo) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            document.querySelectorAll(".".concat(parts, "-").concat(detailInfo))[0].innerHTML += "<option>".concat(item, "</option>");
        }
    };
    View.resetList = function (part, detailInfoList) {
        for (var _i = 0, detailInfoList_1 = detailInfoList; _i < detailInfoList_1.length; _i++) {
            var detailInfo = detailInfoList_1[_i];
            document.querySelectorAll(".".concat(part, "-").concat(detailInfo))[0].innerHTML = "<option>-</option>";
        }
    };
    View.DrawMadePC = function (pc) {
        var container = document.createElement("div");
        container.classList.add("my-3", "bg-warning", "p-3");
        container.innerHTML = "\n        <div class=\"d-flex justify-content-center\">\n            <h2>Your PC".concat(pc.getNumberOfMade(), "</h2>\n        </div>\n        <div>\n            <h2>CPU</h2>\n            <h5>Brand:").concat(pc.getCpuBrand(), "</h5>\n            <h5>Model:").concat(pc.getCpuModel(), "</h5>\n        </div>\n        <div>\n            <h2>GPU</h2>\n            <h5>Brand:").concat(pc.getGpuBrand(), "</h5>\n            <h5>Model:").concat(pc.getGpuModel(), "</h5>\n        </div>\n        <div>\n            <h2>RAM</h2>\n            <h5>Brand:").concat(pc.getRamBrand(), "</h5>\n            <h5>Model:").concat(pc.getRamModel(), "</h5>\n        </div>\n        <div>\n            <h2>Storage</h2>\n            <h5>Disk:").concat(pc.getStorageType(), "</h5>\n            <h5>Storage:").concat(pc.getStorageVolume(), "</h5>\n            <h5>Brand:").concat(pc.getStorageBrand(), "</h5>\n            <h5>Model:").concat(pc.getStorageModel(), "</h5>\n        </div>\n        <div class=\"d-flex\">\n            <h3 class=\"col-6\">Game: ").concat(pc.calcScoreForGaming(), " %</h3>\n            <h3 class=\"col-6\">Work: ").concat(pc.calcScoreForWorking(), " %</h3>\n        </div>\n        ");
        config.result.append(container);
    };
    return View;
}());
Controller.main();
