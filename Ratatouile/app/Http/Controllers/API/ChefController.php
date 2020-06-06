<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Http\Resources\ChefResource;
class ChefController extends Controller
{
    public function index(){
        return ChefResource::collection(
            User::where('is_admin',false)->where('is_chef',true)->get()
        );
    }
    public function show($user){
        return new ChefResource(
            User::find($user)
        );
    }
}
