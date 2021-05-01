<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Link;
use App\Models\Theme;

class UploadController extends Controller
{
    public function getForm()
    {
        return view('upload-form');
    }

    public function getThemes()
    {
        $themes = Theme::all();
        return response()->json($themes);
    }

    public function getTheme($id)
    {
        $theme = Theme::find($id);
        if (!$theme) {
            return response()->json(['status' => false, 'message' => 'Тема не найдена'])
                    ->setStatusCode(404, 'Theme Not Found');
        }
        return response()->json($theme);
    }

    public function upload(Request $request)
    {
        dd($request);
//        foreach ($request->file() as $file) {
//            foreach ($file as $f) {
////                $f->move(storage_path('images'), time().'_'.$f->getClientOriginalName());
//                $f->move('./temp/', time().'_'.$f->getClientOriginalName());
//            }
//        }
//        return response()->json($file);
////        return "Успех";



//      for ($i=0; $i<count($_FILES['file']['name']); $i++) {
//          move_uploaded_file($_FILES['file']['tmp_name'][$i], './temp/' . $_FILES['file']['name'][$i]);
//            $filename = './temp/' . $_FILES['file']['name'][$i];
//            $fp = fopen($filename, "r");
//            $name = substr_replace($_FILES['file']['name'][$i],'', stripos($_FILES['file']['name'][$i], '.url') );
//            $ct = fread($fp, filesize($filename));
//            $contents = substr( $ct, strpos($ct, '=')+1);
//            $domen = substr_replace(substr($ct, strpos($ct, '://')+3),'', strpos(substr($ct, strpos($ct, '://')+3),'/'));
//            $youtube = strpos($ct, 'youtube')? true : false;
//            if ($youtube) {
//                $playlist = strpos($ct, 'playlist')? true : false;
//            }

//              if ($name) {
//                  $link = Link::firstOrCreate([ 'url' => $contents],
//                      ['title' => $name]);
//              }
//              fclose($fp);
//              unlink($filename);




//            ?>
<!--              <pre>-->
<!--                  --><?php //echo $name; ?><!--<br>-->
<!--                  --><?php //echo  $contents;
//                  if ($youtube && $playlist) {
//                      echo "youtube-плейлист\n";
//                  } elseif ($youtube){ echo "youtube-видео\n";}
//                  echo "Домен:  $domen \n";
//                  echo "\n+++++++++++++++++++++++++++++"; ?>
<!--              </pre>-->
<!---->
<!--            --><?php
//          fclose($fp);
//          unlink($filename);

//      }
//      return redirect()->route('home');
//        return view('home', ['message' => 'Это главная страница сайта',
//            'title' => 'Главная страница']);

    }
}
