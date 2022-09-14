@extends('layout')

@section('content')
    @foreach ($clients as $item)
        <Card class="my-1">
            <a href="/clients/{{$item->id}}">
                <div class="flex">
                    <div class="pr-24"> 
                        <img src="media/{{$item->pictures->count() ? $item->pictures[0]['Picture_Location'] : 'a.png'}}" class="w-20 h-20 object-fit">
                    </div>
                    <div class="flex-1">
                    <p class="text-lg font-bold text-black">
                        {{$item->Client_Name}}
                    </p>
                    <p class="mb-4 text-black">
                        {{$item->Script}}
                    </p>
                    <p class="text-gray-500">
                        {{$item->Timestamp}}
                    </p>
                    </div>
                </div>
            </a>
        </Card>
    @endforeach
@endsection