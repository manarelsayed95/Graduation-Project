<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ChefResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return  [
            'id'=>$this->id,
            'name'=>$this->name,
            'email'=>$this->email,
            'image'=>$this->image,
            'work_place'=>$this->work_place,
            'is_banned'=>$this->is_banned
        ];
    }
}
