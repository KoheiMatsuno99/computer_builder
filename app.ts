const config = {
    url : "https://api.recursionist.io/builder/computers?type=",
    inputForm : document.getElementById("computer-parts") as HTMLDivElement,
    result : document.getElementById("result") as HTMLDivElement
}

type item = {
    "Type" : string
    "Part Number" : string
    "Brand" : string
    "Model" : string
    "Rank" : number
    "Benchmark" : number 
}

class PC{
    private cpuBrand : string;
    private cpuModel : string;
    private gpuBrand : string;
    private gpuModel : string;
    private ramBrand : string;
    private ramModel : string;
    private storageType : string;
    private storageVolume : string;
    private storageBrand : string;
    private storageModel : string;
    private cpuScore : number;
    private gpuScore : number;
    private ramScore : number;
    private storageScore : number;
    private numberOfMade : number;
    constructor(){
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
    public canMakePC() : boolean{
        return this.cpuModel !== "-" && this.gpuModel !== "-" && this.ramModel !== "-" && this.storageModel !== "-";
    }
    public getCpuBrand(){
        return this.cpuBrand;
    }
    public getCpuModel(){
        return this.cpuModel;
    }
    public getGpuBrand(){
        return this.gpuBrand;
    }
    public getGpuModel(){
        return this.gpuModel;
    }
    public getRamBrand(){
        return this.ramBrand;
    }
    public getRamModel(){
        return this.ramModel;
    }
    public getStorageType(){
        return this.storageType;
    }
    public getStorageBrand(){
        return this.storageBrand;
    }
    public getStorageVolume(){
        return this.storageVolume;
    }
    public getStorageModel(){
        return this.storageModel;
    }
    private setCpuBrand(cpuBrand : string){
        this.cpuBrand = cpuBrand;
    }
    private setCpuModel(cpuModel : string){
        this.cpuModel = cpuModel;
    }
    private setGpuBrand(gpuBrand : string){
        this.gpuBrand = gpuBrand;
    }
    private setGpuModel(gpuModel : string){
        this.gpuModel = gpuModel;
    }
    private setRamBrand(ramBrand : string){
        this.ramBrand = ramBrand;
    }
    private setRamModel(ramModel : string){
        this.ramModel = ramModel;
    }
    private setStorageType(storageType : string){
        this.storageType = storageType;
    }
    private setStorageVolume(storageVolume : string){
        this.storageVolume = storageVolume;
    }
    private setStorageBrand(storageBrand : string){
        this.storageBrand = storageBrand;
    }
    private setStorageModel(storageModel : string){
        this.storageModel = storageModel;
    }
    public setCpuScore(cpuScore : number){
        this.cpuScore = cpuScore;
    }
    public setGpuScore(gpuScore : number){
        this.gpuScore = gpuScore;
    }
    public setRamScore(ramScore : number){
        this.ramScore = ramScore;
    }
    public setStorageScore(storageScore : number){
        this.storageScore = storageScore;
    }
    public calcScoreForGaming(){
        return Math.floor(this.cpuScore * 0.25 + this.gpuScore * 0.6 + this.ramScore * 0.125 + this.storageScore * 0.025);
    }
    public calcScoreForWorking(){
        return Math.floor(this.cpuScore * 0.6 + this.gpuScore * 0.25 + this.ramScore * 0.1 + this.storageScore * 0.05);
    }
    public tryToMakePC() : void{
        let currentCpuBrandElement = <HTMLSelectElement> document.querySelectorAll(".cpu-brand")[0];
        this.setCpuBrand((currentCpuBrandElement.value));
        let currentCpuModelElement = <HTMLSelectElement> document.querySelectorAll(".cpu-model")[0]
        this.setCpuModel(currentCpuModelElement.value);
        let currentGpuBrandElement = <HTMLSelectElement> document.querySelectorAll(".gpu-brand")[0];
        this.setGpuBrand(currentGpuBrandElement.value);
        let currentGpuModelElement = <HTMLSelectElement> document.querySelectorAll(".gpu-model")[0];
        this.setGpuModel(currentGpuModelElement.value);
        let currentRamBrandElement = <HTMLSelectElement> document.querySelectorAll(".ram-brand")[0];
        this.setRamBrand(currentRamBrandElement.value);
        let currentRamModelElement = <HTMLSelectElement> document.querySelectorAll(".ram-model")[0];
        this.setRamModel(currentRamModelElement.value);
        let currentStorageTypeElement = <HTMLSelectElement> document.querySelectorAll(".storage-type")[0];
        this.setStorageType(currentStorageTypeElement.value);
        let currentStorageVolumeElement = <HTMLSelectElement> document.querySelectorAll(".storage-volume")[0];
        this.setStorageVolume(currentStorageVolumeElement.value);
        let currentStorageBrandElement = <HTMLSelectElement> document.querySelectorAll(".storage-brand")[0];
        this.setStorageBrand(currentStorageBrandElement.value);
        let currentStorageModelElement = <HTMLSelectElement> document.querySelectorAll(".storage-model")[0];
        this.setStorageModel(currentStorageModelElement.value);
    }
    public getNumberOfMade() : number{
        return this.numberOfMade;
    }
    public addNumberOfMade() : void{
        this.numberOfMade ++;
    }
    
}

class Model{
    public static searchRamNumberList(jsonData : item[]) : string[]{
        let ramNumberList = Array.from(new Set(jsonData.map(function(item){
            let ramnumber = item.Model.substring(item.Model.lastIndexOf(" "), item.Model.lastIndexOf("x"));
            return ramnumber;
        })))
        return ramNumberList;
    }
    //要改善
    public static searchVolumeList(jsonData : item[]) : string[]{
        let TBList = [];
        for(let item of jsonData){
            for(let elem of item.Model.split(" ")){
                if(elem.indexOf("TB")!== -1) TBList.push(elem);
            }
        }
        let GBList = [];
        for(let item of jsonData){
            for(let elem of item.Model.split(" ")){
                if(elem.indexOf("GB")!== -1) GBList.push(elem);
            }
        }
        let volumeList : string[] = Array.from(new Set(TBList)).concat(Array.from(new Set(GBList)).sort());
        return volumeList;
    }
    //CPU GPU
    public static searchBrandList(jsonData : item[]) : string[]{
        let brandList : string[] = Array.from(new Set(jsonData.map(item => item.Brand))).sort();
        return brandList;
    }
    public static searchRamBrandList(jsonData : item[], selectedNumber : string){
        let brandList = [];
        for(let item of jsonData){
            let num = item.Model.substring(item.Model.lastIndexOf(" ") + 1, item.Model.lastIndexOf("x"));
            if(num === selectedNumber) brandList.push(item.Brand);
        }
        return Array.from(new Set(brandList)).sort();
    }
    public static searchStorageBrandList(jsonData : item[], selectedVolume : string){
        let brandList = Array.from(new Set(jsonData.filter(item => item.Model.indexOf(selectedVolume) !== -1).map(item => item.Brand))).sort();
        return brandList;
    }
    public static searchModelList(jsonData : item[], selectedBrand : string){
        let modelList = Array.from(new Set(jsonData.filter(item => item.Brand === selectedBrand).map(item => item.Model))).sort();
        return modelList;
    }
    public static searchRamModelList(jsonData : item[], selectedNumber : string, selectedBrand : string){
        let modelList : string[] = [];
        for(let item of jsonData){
            let num = item.Model.substring(item.Model.lastIndexOf(" ") + 1, item.Model.lastIndexOf("x"));
            if(num === selectedNumber && item.Brand === selectedBrand) modelList.push(item.Model);
        }
        return Array.from(new Set(modelList)).sort();
    }
    public static searchStorageModelList(jsonData : item[], selectedType : string, selectedVolume : string, selectedBrand : string){
        let modelList : string[] = [];
        for(let item of jsonData){
            if(item.Type === selectedType.toUpperCase() && item.Model.indexOf(selectedVolume) !== -1 && item.Brand === selectedBrand) modelList.push(item.Model);
        }
        return Array.from(new Set(modelList)).sort();
    }
    public static searchBenchMarkScore(jsonData : item[], selectedModel : string){
        let benchMarkScore : number = jsonData.filter(item => item.Model === selectedModel).map(item => item.Benchmark)[0];
        return benchMarkScore;
    }
}

class Controller{
    //ControllerでfetchAPIを制御
    private static fetchRamNumbers(pc : PC){
        fetch(config.url + "ram")
        .then(response => response.json())
        .then(function(jsonData : item[]){
            let ramNumberList = Model.searchRamNumberList(jsonData).sort();
            View.resetList("ram", ["number","brand", "model"]);
            View.appendList(ramNumberList, "ram", "number");
            document.querySelectorAll(".ram-number")[0].addEventListener("change", function(event){
                if(!(event.currentTarget instanceof HTMLSelectElement)){
                    return;
                }
                View.resetList("ram", ["brand", "model"]);
                Controller.fetchRamBrands(pc, event.currentTarget.value);
            })
        })
    }
    private static fetchStorageVolume(pc : PC){
        document.querySelectorAll(".storage-type")[0].addEventListener("change", function(event){
            if(!(event.currentTarget instanceof HTMLSelectElement)){
                return;
            }
            View.resetList("storage", ["volume", "brand", "model"]);
            let selectedType = event.currentTarget.value.toLowerCase();
            fetch(config.url + selectedType)
            .then(response => response.json())
            //なぜか1回目はここで失敗する
            .then(function(jsonData : item[]){
                let volumeList = Model.searchVolumeList(jsonData);
                View.resetList("storage", ["brand", "model"]);
                View.appendList(volumeList, "storage", "volume");
                document.querySelectorAll(".storage-volume")[0].addEventListener("change", function(event){
                    if(!(event.currentTarget instanceof HTMLSelectElement)){
                        return;
                    }
                    View.resetList("storage", ["brand", "model"]);
                    selectedType = selectedType.toLowerCase();
                    Controller.fetchStorageBrands(pc, event.currentTarget.value);
                })
            })
        })   
    }
    private static fetchCPUBrands(pc : PC){
        fetch(config.url + "cpu")
        .then(response => response.json())
        .then(function(jsonData : item[]){
            let brands = Model.searchBrandList(jsonData);
            //Viewクラスのメソッドを使用してbrandsをタブに追加
            View.appendList(brands,"cpu", "brand");
            document.querySelectorAll(".cpu-brand")[0].addEventListener("change",function(event){
                if(!(event.currentTarget instanceof HTMLSelectElement)){
                    return;
                }
                View.resetList("cpu", ["model"]);
                Controller.fetchModels(pc, "cpu", event.currentTarget.value);
            })
        })
    }
    //たまたまCPUと入力項目が共通しているだけだと判断し、あえてfetchCPUBrandsとは別の関数として設計
    private static fetchGPUBrands(pc : PC){
        fetch(config.url + "gpu")
        .then(response => response.json())
        .then(function(jsonData : item[]){
            let brands = Model.searchBrandList(jsonData);
            //Viewクラスのメソッドを使用してbrandsをタブに追加
            View.appendList(brands,"gpu", "brand");
            document.querySelectorAll(".gpu-brand")[0].addEventListener("change",function(event){
                if(!(event.currentTarget instanceof HTMLSelectElement)){
                    return;
                }
                View.resetList("gpu", ["model"]);
                Controller.fetchModels(pc, "gpu", event.currentTarget.value);                
            })
        })
    } 
    private static fetchRamBrands(pc : PC, selectedNumber : string){
        fetch(config.url + "ram")
        .then(response => response.json())
        .then(function(jsonData : item[]){
            let brands = Model.searchRamBrandList(jsonData, selectedNumber);
            View.resetList("ram", ["brand", "model"]);
            View.appendList(brands, "ram", "brand");
            document.querySelectorAll(".ram-brand")[0].addEventListener("change", function(event){
                if(!(event.currentTarget instanceof HTMLSelectElement)){
                    return;
                }
                View.resetList("ram", ["model"]);
                let currentElement = <HTMLSelectElement>document.querySelectorAll(".ram-number")[0];
                let currentNumber = currentElement.value;
                console.log(currentNumber);//ここが2回判定される currentnumberで応急処置
                Controller.fetchRamModels(pc, currentNumber, event.currentTarget.value);
            });
        })
    }
    private static fetchStorageBrands(pc : PC, selectedVolume : string){
        let storageTypeElement = <HTMLSelectElement>document.querySelectorAll(".storage-type")[0];
        let storageType = storageTypeElement.value.toLowerCase();
        fetch(config.url + storageType)
        .then(response => response.json())
        .then(function(jsonData : item[]){
            let brands = Model.searchStorageBrandList(jsonData, selectedVolume);
            console.log("type : " + storageType + "brands" + brands);
            View.resetList("storage", ["brand","model"]);
            View.appendList(brands, "storage", "brand");
            document.querySelectorAll(".storage-brand")[0].addEventListener("change", function(event){
                if(!(event.currentTarget instanceof HTMLSelectElement)){
                    return;
                }
                Controller.fetchStorageModels(pc, event.currentTarget.value);
            })
        })
    }
    private static fetchModels(pc : PC, parts : string ,selectedBrand : string){
        fetch(config.url + parts)
        .then(response => response.json())
        .then(function(jsonData : item[]){
            let models = Model.searchModelList(jsonData, selectedBrand);
            View.appendList(models, parts, "model");
            document.querySelectorAll(`.${parts}-model`)[0].addEventListener("change", function(event){
                if(!(event.currentTarget instanceof HTMLSelectElement)){
                    return;
                }
                Controller.fetchBeanchMarkScore(pc, parts, event.currentTarget.value);
            })
        })
    }
    private static fetchRamModels(pc : PC, selectedNumber : string, selectedBrand : string){
        fetch(config.url + "ram")
        .then(response => response.json())
        .then(function(jsonData : item[]){
            let models = Model.searchRamModelList(jsonData, selectedNumber, selectedBrand);
            View.resetList("ram", ["model"]);
            View.appendList(models, "ram", "model");
            document.querySelectorAll(".ram-model")[0].addEventListener("change", function(event){
                if(!(event.currentTarget instanceof HTMLSelectElement)){
                    return;
                }
                Controller.fetchBeanchMarkScore(pc, "ram", event.currentTarget.value);
            })
        })
    }
    private static fetchStorageModels(pc : PC, selectedBrand : string){
        let selectedTypeElement = <HTMLSelectElement> document.querySelectorAll(".storage-type")[0];
        let selectedType = selectedTypeElement.value.toLowerCase();
        fetch(config.url + selectedType)
        .then(response => response.json())
        .then(function(jsonData : item[]){
            console.log("type:" + selectedType);
            let selectedVolumeElement = <HTMLSelectElement> document.querySelectorAll(".storage-volume")[0];
            let selectedVolume = selectedVolumeElement.value;
            let models = Model.searchStorageModelList(jsonData, selectedType, selectedVolume, selectedBrand);
            View.resetList("storage", ["model"]);
            View.appendList(models, "storage", "model");
            document.querySelectorAll(".storage-model")[0].addEventListener("change", function(event){
                if(!(event.currentTarget instanceof HTMLSelectElement)){
                    return;
                }
                Controller.fetchBeanchMarkScore(pc, selectedType, event.currentTarget.value);
            })
        })
    }
    private static fetchBeanchMarkScore(pc : PC, parts : string, selectedModel : string){
        fetch(config.url + parts)
        .then(response => response.json())
        .then(function(jsonData : item[]){
            let score = Model.searchBenchMarkScore(jsonData, selectedModel);
            if(parts === "cpu") pc.setCpuScore(score);
            else if(parts === "gpu") pc.setGpuScore(score);
            else if(parts === "ram") pc.setRamScore(score);
            else if(parts === "hdd") pc.setStorageScore(score);
            else pc.setStorageScore(score);//ssd
        })
    }
    //Controllerはmain関数だけpublic
    public static main(){
        View.drawInitialScreen();
        //作成したpcの情報は画面に出ていれば良い
        //PCクラスに保持する必要はない
        let pc = new PC();
        Controller.fetchCPUBrands(pc);
        Controller.fetchGPUBrands(pc);
        Controller.fetchRamNumbers(pc);
        Controller.fetchStorageVolume(pc);
        document.querySelectorAll(".build-pc")[0].addEventListener("click", function(){
            //一旦null？
            pc.tryToMakePC();
            if(pc.canMakePC()){
                pc.addNumberOfMade();
                View.DrawMadePC(pc);               
            }
            else{
                alert("To build pc, all forms have to be filled out");
            }
        })
    }
}

class View{
    public static drawInitialScreen() : void{
        let container = document.createElement("div");
        container.innerHTML = `
        <div>
            <h3>step1: Select Your CPU</h3>
        </div>
        <div class="d-flex my-2">
            <h4>Brand</h4>
            <select class="form-select m-1 cpu-brand w-25" id="cpu-brand">
                <option>-</option>
            </select>            
            <h4>Model</h4>
            <select class="form-select m-1 cpu-model w-25">
                <option>-</option>
            </select>
        </div>
        <div>
            <h3>step2: Select Your GPU</h3>
        </div>
        <div class="d-flex my-2">
            <h4>Brand</h4>
            <select class="form-select m-1 gpu-brand w-25">
                <option>-</option>
            </select>            
            <h4>Model</h4>
            <select class="form-select m-1 gpu-model w-25">
                <option>-</option>
            </select>
        </div>
        <div>
            <h3>step3: Select Your Memory Card</h3>
        </div>
        <div class="d-flex my-2">
            <h4>How many?</h4>
            <select class="form-select m-1 ram-number w-25">
                <option>-</option>
            </select>  
            <h4>Brand</h4>
            <select class="form-select m-1 ram-brand w-25">
                <option>-</option>
            </select>            
            <h4>Model</h4>
            <select class="form-select m-1 ram-model w-25">
                <option>-</option>
            </select>
        </div>
        <div>
            <h3>step4: Select Your Storage</h3>
        </div>
        <div class="d-flex my-2">
            <h4>HDD or SSD</h4>
            <!--HDDかSSDの二択であることは固定なので、ハードコードで対処-->
            <select class="form-select m-1 storage-type w-25">
                <option>-</option>
                <option>HDD</option>
                <option>SSD</option>
            </select>
            <h4>Storage</h4>
            <select class="form-select m-1 storage-volume w-25">
                <option>-</option>
            </select>  
            <h4>Brand</h4>
            <select class="form-select m-1 storage-brand w-25">
                <option>-</option>
            </select>            
            <h4>Model</h4>
            <select class="form-select m-1 storage-model w-25">
                <option>-</option>
            </select>
        </div>
        <button type="button" class="btn btn-primary my-2 build-pc">Add PC</button>
        `;
        config.inputForm.append(container);
    }
    public static appendList(items : string[], parts : string, detailInfo : string){
        for(let item of items){
            document.querySelectorAll(`.${parts}-${detailInfo}`)[0].innerHTML += `<option>${item}</option>`;
        }
    }
    public static resetList(part : string, detailInfoList : string[]){
        for(let detailInfo of detailInfoList){
            document.querySelectorAll(`.${part}-${detailInfo}`)[0].innerHTML = `<option>-</option>`;
        }
    }
    public static DrawMadePC(pc : PC){
        let container = document.createElement("div");
        container.classList.add("my-3", "bg-warning", "p-3");
        container.innerHTML = `
        <div class="d-flex justify-content-center">
            <h2>Your PC${pc.getNumberOfMade()}</h2>
        </div>
        <div>
            <h2>CPU</h2>
            <h5>Brand:${pc.getCpuBrand()}</h5>
            <h5>Model:${pc.getCpuModel()}</h5>
        </div>
        <div>
            <h2>GPU</h2>
            <h5>Brand:${pc.getGpuBrand()}</h5>
            <h5>Model:${pc.getGpuModel()}</h5>
        </div>
        <div>
            <h2>RAM</h2>
            <h5>Brand:${pc.getRamBrand()}</h5>
            <h5>Model:${pc.getRamModel()}</h5>
        </div>
        <div>
            <h2>Storage</h2>
            <h5>Disk:${pc.getStorageType()}</h5>
            <h5>Storage:${pc.getStorageVolume()}</h5>
            <h5>Brand:${pc.getStorageBrand()}</h5>
            <h5>Model:${pc.getStorageModel()}</h5>
        </div>
        <div class="d-flex">
            <h3 class="col-6">Game: ${pc.calcScoreForGaming()} %</h3>
            <h3 class="col-6">Work: ${pc.calcScoreForWorking()} %</h3>
        </div>
        `;
        config.result.append(container);
    }
}

Controller.main();