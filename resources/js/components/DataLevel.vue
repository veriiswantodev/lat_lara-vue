<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Data Level</div>

                    <div class="card-body">
                        <div class="form-group">
                            <div class="table-responsive">
                                <table class="table">
                                    <tr>
                                        <th>Nama Level</th>
                                        <th>Aksi</th>
                                    </tr>
                                    
                                    <tr v-for="item in levels" :key="item.message">
                                        <td>{{item.name}}</td>
                                        <td>Edit | Hapus</td>
                                    </tr>
                                </table>    
                            </div>    
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    data(){
        return{
            levels: []
        }
    },
    methods:{
        loadData(){
            axios.get('api/data-level').then(({data}) => {this.levels = data});
        }
    },
    created(){
        this.loadData();
    }
}
</script>
